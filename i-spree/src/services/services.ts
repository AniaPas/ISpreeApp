//Axios
import axios from "axios";

//Interface
import { PayloadInterface } from "../Store/GlobalStore";

const API = "https://dummyjson.com";
const getCarts = () => {
  const apiBaskets = `${API}/carts`;
  return axios.get(apiBaskets);
};
const getOneCart = (id: string) => {
  const apiOneBasket = `${API}/carts/${id}`;
  return axios.get(apiOneBasket);
};
const addCart = (payload: PayloadInterface) => {
  const addedCartUrl = `${API}/carts/add`;
  return axios.post(addedCartUrl, payload, {
    headers: { "Content-Type": "application/json" },
  });
};
const deleteCart = (id: string) => {
  const apiCart = `${API}/carts/${id}`;
  return axios.delete(apiCart);
};
export { getCarts, getOneCart, addCart, deleteCart };
