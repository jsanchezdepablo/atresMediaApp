import { createReducer } from "./reducerHelper";

const initialState = {
  dogTypes: [
    {
      value: "0",
      label: "Pulse en el desplegable"
    }
  ],
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

const parsedToValueLabel = types =>
  Object.keys(types).map(type => ({ value: type, label: type }));

const dogReducer = createReducer(initialState, {
  GET_DOG_TYPES_SUCCESS: getDogTypesSuccess
});
export default dogReducer;
