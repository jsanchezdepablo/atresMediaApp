import { createReducer } from "./reducerHelper";

const initialState = {
  dogTypes: [
    {
      value: "",
      label: ""
    }
  ],
  dogImages: [],
  dataReady: false
};

const getDogTypesSuccess = (state, action) => {
  const { dogTypes: dogObjectTypes } = action.payload;

  return {
    ...state,
    dogTypes: parsedToValueLabel(dogObjectTypes),
    dataReady: true
  };
};

const getDogImagesSuccess = (state, action) => {
  debugger;

  const { dogImages } = action.payload;
  return {
    ...state,
    dogImages
  };
};

const parsedToValueLabel = types =>
  Object.keys(types).map(type => ({ value: type, label: type }));

const dogReducer = createReducer(initialState, {
  GET_DOG_TYPES_SUCCESS: getDogTypesSuccess,
  GET_DOG_TYPE_IMAGES_SUCCESS: getDogImagesSuccess
});

export default dogReducer;
