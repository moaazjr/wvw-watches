import { createContext, useContext, useEffect, useState } from "react";
import { userContext } from "./login/useUser";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const watchContext = createContext<ReturnType<typeof useWatches> | null>(null);

export function WatchProvider({ children }) {
  const watch = useWatchesProvider();

  return (
    <watchContext.Provider value={watch}>{children}</watchContext.Provider>
  );
}

export function useWatches() {
  const context = useContext(watchContext);

  if (!context) {
    throw new Error("useWatches must be used within a WatchProvider");
  }
  return context;
}

function useWatchesProvider() {
  const [data, setData] = useState<any[] | null>(null);
  const [sort, setSort] = useState("newest");
  const [favorites, setFavorites] = useState<string[]>([]);

  const { user } = useContext(userContext);

  const router = useRouter();
  const [filter, setFilter] = useState<{ brand: string[]; water: string }>({
    brand: [],
    water: "none",
  });

  useEffect(() => {
    getWatches();
  }, [sort]);

  useEffect(() => {
    const storedWatches = localStorage.getItem("watches");
    if (storedWatches) {
      setFavorites(JSON.parse(storedWatches));
    }
    console.log(storedWatches);
  }, []);

  function getWatches() {
    fetch(
      `/api/watches?brand=${filter.brand.join(",")}&waterResistance=${
        filter.water
      }&sort=${sort}`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  function toggleFavorite(watch) {
    if (!user) {
      router.push("/login");
      return;
    }
    if (favorites.includes(watch.id)) {
      setFavorites((fav) => {
        localStorage.setItem(
          "watches",
          JSON.stringify(fav.filter((id) => id !== watch.id))
        );
        return fav.filter((id) => id !== watch.id);
      });
    } else {
      setFavorites((favorites) => {
        localStorage.setItem(
          "watches",
          JSON.stringify([...favorites, watch.id])
        );
        return [...favorites, watch.id];
      });
    }
  }
  function hasFav(watch) {
    return favorites.includes(watch.id);
  }
  return {
    hasFav,
    toggleFavorite,
    data,
    getWatches,
    setFilter,
    sort,
    setSort,
  };
}
