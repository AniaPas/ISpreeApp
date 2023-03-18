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

  //children: React.ReactNode;
}

interface GlobalStateInterface {
  globalCarts: CartInterface[];
  globalGetCarts: (data: CartInterface[]) => void;
  // globalOneCart: CartInterface;
  // globalGetOneCart: (data: CartInterface) => void;
}
interface GlobalStoreInterface {
  children: JSX.Element | JSX.Element[];
}
export const GlobalState = createContext<GlobalStateInterface>({
  globalCarts: [],
  globalGetCarts: () => {},
  // globalOneCart: {},
  // globalGetOneCart: () => {},
});

export const GlobalStore: FC<GlobalStoreInterface> = (props) => {
  const [carts, setCarts] = useState<CartInterface[]>([]);

  const getCarts = (data: CartInterface[]) => {
    setCarts(data);
  };
  // const [oneCart, setOneCart] = useState<CartInterface>();

  // const getOneCart = (data: CartInterface) => {
  //   setOneCart(data);
  // };
  const providerValue = {
    globalCarts: carts,
    globalGetCarts: getCarts,
    // globalOneCart: oneCart,
    // globalGetOneCart: getOneCart,
  };
  return (
    <GlobalState.Provider value={providerValue}>
      {props.children}
    </GlobalState.Provider>
  );
};
