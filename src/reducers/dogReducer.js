import { createReducer } from "./reducerHelper";

export const initialState = {
  dogTypes: [
    {
      value: "",
      label: ""
    }
  ],
  dogImages: [],
  dataReady: false,
  hasImages: false
};

const getDogTypesSuccess = (state, action) => {
  const { dogTypes: dogObjectTypes } = action.payload;

  return {
    ...state,
    dogTypes: parsedToValueLabel(dogObjectTypes),
    dataReady: true
  };
};

const getDogImagesSuccess = (state, action) => ({
  ...state,
  dogImages: action.payload.dogImages,
  hasImages: true
});

const parsedToValueLabel = types =>
  Object.keys(types).map(type => ({ value: type, label: type }));

const dogReducer = createReducer(initialState, {
  GET_DOG_TYPES_SUCCESS: getDogTypesSuccess,
  GET_DOG_TYPE_IMAGES_SUCCESS: getDogImagesSuccess
});

export default dogReducer;
