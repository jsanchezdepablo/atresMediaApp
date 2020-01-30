import axios from "axios/index";

export const getDogTypes = () => {
  const URL = `https://dog.ceo/api/breeds/list/all`;
  return axios.get(URL);
};

export const getDogImages = params => {
  const { selectorValue: dogType } = params;
  const URL = `https://dog.ceo/api/breed/${dogType}/images`;
  return axios.get(URL);
};
