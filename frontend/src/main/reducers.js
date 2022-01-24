import { combineReducers } from "redux";
import todoReducer from "../todo/todoReducer";

//reducer Join all reducers
const rootReducer = combineReducers({
  //Each reducer with its own key
  todo:todoReducer //application state
});

export default rootReducer;
