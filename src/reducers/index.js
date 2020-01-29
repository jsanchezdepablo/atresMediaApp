import { combineReducers } from "redux";
import DogReducer from "./dogReducer";

const rootReducer = combineReducers({
  dogState: DogReducer
});

export default rootReducer;
