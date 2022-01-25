import axios from "axios";

const URL = "http://localhost:3003/api/todos";

//Action Creator - CHANGE STATE OF THE INPUT TITLE TASK CONTENT
export const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value,
});

//Action Creator - SEARCH TASK
export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`);
  return {
    type: "TODO_SEARCHED",
    payload: request,
  };
};

//Action Creator - ADD TASK
export const addTask = (description) => {
  return (dispatch) => {
    axios
    .post(URL, { description })
    .then((resp) => dispatch({ type: "TODO_ADDED", payload: resp.data }))
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