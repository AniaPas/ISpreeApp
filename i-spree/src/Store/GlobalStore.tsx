import { useState, createContext, FC } from "react";
export interface ProductInterface {
  product_name: string;
  regular_price: number;
  discount_price: number;
}
export interface BasketsInterface {}

interface GlobalStateInterface {
  globalBaskets: BasketsInterface;
  globalGetBaskets: (data: BasketsInterface[]) => void;
}
interface GlobalStoreInterface {
  children: JSX.Element | JSX.Element[];
}
export const GlobalState = createContext<GlobalStateInterface>({
  globalBaskets: [],
  globalGetBaskets: () => {},
});

export const GlobalStore: FC<GlobalStoreInterface> = (props) => {
  const [baskets, setBaskets] = useState<BasketsInterface[]>([]);

  const getBaskets = (data: BasketsInterface[]) => {
    setBaskets(data);
  };
  const providerValue = {
    globalBaskets: baskets,
    globalGetBaskets: getBaskets,
  };
  return (
    <GlobalState.Provider value={providerValue}>
      {props.children}
    </GlobalState.Provider>
  );
};
