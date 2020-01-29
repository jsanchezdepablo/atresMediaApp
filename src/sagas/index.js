import { all } from "redux-saga/effects";
import { dogSagas } from "./dogSagas";

const rootSaga = function*() {
  yield all([...dogSagas()]);
};

export default rootSaga;
