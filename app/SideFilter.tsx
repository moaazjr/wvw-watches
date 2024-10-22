"use client";

import Accordion from "./Accordion";
import { watches } from "./api/watches/route";
import { useWatches } from "./useWatches";

const allBrandList = watches.map((w) => w.brand);
const brandsList = Array.from(new Set(allBrandList));
const options = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Dosen't mater", value: "none" },
];
export function SideFilter() {
  const { setFilter, data, getWatches } = useWatches();

  return (
    <div className="max-w-[250px] w-full p-6 sticky top-0 h-fit">
      <h3 className="font-medium uppercase pb-6 text-lg">Filter</h3>
      <hr />
      <Accordion defaultOpen title="Brand">
        <div>
          {brandsList.map((brand) => (
            <div key={brand} className="flex gap-2">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilter((filter) => ({
                      ...filter,
                      brand: [...filter.brand, brand],
                    }));
                  } else {
                    setFilter((filter) => ({
                      ...filter,
                      brand: filter.brand.filter((b) => b != brand),
                    }));
                  }
                }}
              />
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </Accordion>
      <hr />
      <Accordion title="Case Shape">
        <div></div>
      </Accordion>
      <hr />
      <Accordion title="Water Resistance">
        <div className="grid gap-2">
          {options.map((option) => (
            <label key={option.value} className="flex gap-2">
              <input
                name="water-resistance"
                type="radio"
                defaultChecked={option.value == "none"}
                onChange={() => {
                  setFilter((filter) => ({
                    ...filter,
                    water: option.value,
                  }));
                }}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </Accordion>
      <button
        onClick={() => {
          getWatches();
        }}
        className="w-full p-3.5 border border-primary
       bg-white uppercase text-xs font-semibold mt-8 hover:bg-primary
        hover:text-white transition"
      >
        Show {data?.length || "--"} Results
      </button>
    </div>
  );
}
