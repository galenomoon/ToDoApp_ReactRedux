import axios from "axios";

const URL = "http://localhost:3003/api/todos";

//Action Creator - CHANGE STATE OF THE INPUT TITLE TASK CONTENT
export const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value,
});

//Action Creator - SEARCH TASK
export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : "";
    const request = axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((resp) => dispatch({ type: "TODO_SEARCHED", payload: resp.data }));
  };
};

//Action Creator - ADD TASK
export const addTask = (description) => {
  return (dispatch) => {
    axios
      .post(URL, { description })
      .then((resp) => dispatch({ type: "TODO_CLEAR", payload: resp.data }))
      .then((resp) => dispatch(search()));
  };
};

//Action Creator - CHANGE STATUS OF THE TASK AS DONE
export const markAsDone = (todo) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((resp) => dispatch(search()));
  };
};

//Action Creator - CHANGE STATUS OF THE TASK AS PENDING
export const markAsPending = (todo) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((resp) => dispatch(search()));
  };
};

//Action Creator - REMOVE TASK
export const removeTask = (todo) => {
  return (dispatch) => {
    axios.delete(`${URL}/${todo._id}`).then((resp) => dispatch(search()));
  };
};

//Action Creator - CLEAN INPUT SEARCH
export const clear = () => {
  return [{ type: "TODO_CLEAR" }, search()]
};
