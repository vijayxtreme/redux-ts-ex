import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducers";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
