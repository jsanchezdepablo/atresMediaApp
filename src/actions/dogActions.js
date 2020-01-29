export const getDogTypes = () => ({ type: "GET_DOG_TYPES" });
export const getDogTypesSuccess = data => ({
  type: "GET_DOG_TYPES_SUCCESS",
  payload: data
});
