import { call, put, takeLatest } from "redux-saga/effects";
import {
  getDogTypes as getDogTypesRequest,
  getDogImages as getDogImagesRequest
} from "../providers/dogProvider";
import { getDogTypesSuccess, getDogImagesSuccess } from "../actions/dogActions";

const getDogTypes = function*() {
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

const getDogImages = function*(action) {
  try {
    const { selectorValue } = action.payload;

    const response = yield call(getDogImagesRequest, { selectorValue });

    yield put(
      getDogImagesSuccess({
        dogImages: response.data.message
      })
    );
  } catch (error) {
    console.error(error);
  }
};

export const dogSagas = () => [
  takeLatest("GET_DOG_TYPES", getDogTypes),
  takeLatest("GET_DOG_TYPE_IMAGES", getDogImages)
];
