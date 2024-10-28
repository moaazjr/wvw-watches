import { createContext, useContext, useState } from "react";

export const cartContext = createContext<{
  setItems: any;
  items: { watch: any; count: number }[];
}>(null as any);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  return (
    <cartContext.Provider value={{ items, setItems }}>
      {children}
    </cartContext.Provider>
  );
}
