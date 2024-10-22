"use client";

import { WatchMeta } from "@/types";
import { Card } from "./Card";
import { useWatches } from "./useWatches";

export function Cards() {
  const {data , setSort , sort } = useWatches();

 
  return (
    <div className="max-w-[1090px] w-full pl-2">
      <div className="flex justify-between items-center py-4 pt-6">
        <span className="uppercase text-sm">{data?.length || "?"} items</span>
        <div>
          <label
            htmlFor="sorted by"
            className="uppercase text-gray-400 text-sm"
          >
            sorted by :
          </label>
          <select
            defaultValue={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
            name="sort"
            id="sort"
            className="uppercase text-sm"
          >
            <option value="price-asc">price - low to high</option>
            <option value="price-desc">price - high to low</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full gap-6">
        <img
          src="https://i.pinimg.com/474x/ba/ed/23/baed2394d31d7bac5f44177002df3911.jpg"
          alt=""
          className="w-full object-cover grid col-start-3 row-start-1 max-h-[564px]"
        />
        {data?.map((card: WatchMeta) => (
          <Card key={card.id} watch={card}  />
        )) || <Skeleton />}
      </div>
    </div>
  );
}

const Skeleton = () => {
  return [...Array(12)].map((_, i) => <Card key={i} watch={undefined}  />);
};
