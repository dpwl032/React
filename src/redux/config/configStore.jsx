import { createStore } from "redux";
import { combineReducers } from "redux";
import toDoLists from "../modules/Todos";

const rootReducer = combineReducers({
  toDoLists,
});

const store = createStore(rootReducer);

export default store;
