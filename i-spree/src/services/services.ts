import axios from "axios";
const API = "https://dummyjson.com";
const getCarts = () => {
  const apiBaskets = `${API}/carts`;
  return axios.get(apiBaskets);
};
const getOneCart = (id: string) => {
  const apiOneBasket = `${API}/carts/${id}`;
  return axios.get(apiOneBasket);
};
export { getCarts, getOneCart };
