import { createReducer } from "./reducerHelper";

const initialState = {
  dogTypes: [
    {
      value: "USD",
      label: "$"
    },
    {
      value: "EUR",
      label: "€"
    },
    {
      value: "BTC",
      label: "฿"
    },
    {
      value: "JPY",
      label: "¥"
    }
  ]
};

const getDogTypesSuccess = (state, action) => {
  console.log("traigo datos");
  return {
    ...state
  };
};

const dogReducer = createReducer(initialState, {
  GET_DOG_TYPES_SUCCESS: getDogTypesSuccess
});
export default dogReducer;
