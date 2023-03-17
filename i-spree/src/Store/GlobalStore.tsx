import { useState, createContext, FC } from "react";
export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}
export interface CartInterface {
  id: number;
  products: ProductInterface[];
  children: React.ReactNode;
}

interface GlobalStateInterface {
  globalCarts: CartInterface[];
  globalGetCarts: (data: CartInterface[]) => void;
}
interface GlobalStoreInterface {
  children: JSX.Element | JSX.Element[];
}
export const GlobalState = createContext<GlobalStateInterface>({
  globalCarts: [],
  globalGetCarts: () => {},
});

export const GlobalStore: FC<GlobalStoreInterface> = (props) => {
  const [carts, setCarts] = useState<CartInterface[]>([]);

  const getCarts = (data: CartInterface[]) => {
    setCarts(data);
  };
  const providerValue = {
    globalCarts: carts,
    globalGetCarts: getCarts,
  };
  return (
    <GlobalState.Provider value={providerValue}>
      {props.children}
    </GlobalState.Provider>
  );
};
