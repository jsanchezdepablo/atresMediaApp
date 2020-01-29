import axios from "axios/index";

export const getDogTypes = () => {
  const URL = `https://dog.ceo/api/breeds/list/all`;
  return axios.get(URL);
};
