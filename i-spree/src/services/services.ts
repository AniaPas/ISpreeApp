import axios from "axios";
const API = "http://localhost:3000/";
const getBaskets = () => {
  const apiBaskets = `${API}/basket`;
  return axios.get(apiBaskets);
};
const getOneBasket = (id: string) => {
  const apiOneBasket = `${API}/basket/${id}`;
  return axios.get(apiOneBasket);
};
export { getBaskets, getOneBasket };
