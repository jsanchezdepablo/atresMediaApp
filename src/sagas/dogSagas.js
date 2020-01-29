import { call, put, takeLatest } from "redux-saga/effects";
import { getDogTypes as getDogTypesRequest } from "../providers/dogProvider";
import { getDogTypesSuccess } from "../actions/dogActions";

export const getDogTypes = function*(action) {
  try {
    const response = yield call(getDogTypesRequest);

    yield put(
      getDogTypesSuccess({
        dogTypes: response.data.message
      })
    );
  } catch (error) {
    console.error(error);
  }
};

export const dogSagas = () => [takeLatest("GET_DOG_TYPES", getDogTypes)];
