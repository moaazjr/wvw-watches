"use client";

import { Navbar } from "./Navbar";
import { SideFilter } from "./SideFilter";
import { Cards } from "./Cards";
import { WatchProvider } from "./useWatches";
import { SearchFilter } from "./SearchFilter";
import { useState } from "react";
import { CartProvider } from "./useCart";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CartProvider>
        <Navbar setOpen={setOpen} />
        <main className="flex ">
          <WatchProvider>
            <SideFilter />
            <Cards />
            {open && <SearchFilter setOpen={setOpen} />}
          </WatchProvider>
        </main>
      </CartProvider>
    </>
  );
}
