import { combineReducers } from "redux";

//reducer Join all reducers
const rootReducer = combineReducers({
  //Each reducer with its own key
  todo: () => ({
    description: "Read a Book",
    list: [
      {
        _id: 1,
        description: "Subscribe in Guilherme Galeno's YouTube channel",
        done: true,
      },
      {
        _id: 2,
        description: "Share Guilherme Galeno's YouTube channel",
        done: false,
      },
      {
        _id: 3,
        description: "Listen Guilherme Galeno in Spotify",
        done: false,
      },
    ],
  }), //application state
});

export default rootReducer;
