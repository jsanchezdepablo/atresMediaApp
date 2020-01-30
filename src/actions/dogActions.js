export const getDogTypes = () => ({ type: "GET_DOG_TYPES" });
export const getDogTypesSuccess = data => ({
  type: "GET_DOG_TYPES_SUCCESS",
  payload: data
});

export const getDogImages = data => ({ type: "GET_DOG_TYPE_IMAGES", payload: data });
export const getDogImagesSuccess = data => ({ type: "GET_DOG_TYPE_IMAGES_SUCCESS", payload: data });
