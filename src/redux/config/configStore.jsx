import { createStore } from "redux";
import { combineReducers } from "redux";
import toDoLists from "../modules/Todos";
import doneLists from "../modules/Donedos";

const rootReducer = combineReducers({
  toDoLists,
  doneLists,
});

const store = createStore(rootReducer);

export default store;
