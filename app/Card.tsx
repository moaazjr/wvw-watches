import { useContext, useState } from "react";
import { useWatches } from "./useWatches";
import { userContext } from "./login/useUser";
import { cartContext } from "./useCart";

export function Card({ watch }) {
  const { hasFav, toggleFavorite } = useWatches();
  const { user } = useContext(userContext);
  const [counter, setcounter] = useState(1);
  const { setItems, items } = useContext(cartContext);

  // console.log(items);

  return (
    <div className="relative">
      {watch ? (
        <div className="relative group">
          <img
            src={watch.imageURL}
            alt="watch"
            className="w-full aspect-[275/370] bg-gray-100 object-cover"
          />

          <div className="justify-between items-center w-full gap-4 hidden absolute bottom-0 p-2 group-hover:flex">
            <div className="flex  justify-center items-center">
              <button
                onClick={() => {
                  if (counter == 1) {
                    return;
                  }
                  setcounter(counter - 1);
                }}
                className="bg-secondary text-white size-10 hover:bg-opacity-75 transition"
              >
                -
              </button>
              <span className="bg-white size-10 flex items-center justify-center">
                {counter}
              </span>
              <button
                onClick={() => setcounter(counter + 1)}
                className="bg-secondary text-white size-10 hover:bg-opacity-75 transition"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                const findedWatch = items.find(
                  (item) => item.watch.id === watch.id
                );
                if (!watch) {
                  setItems([...items, { watch, count: counter }]);
                } else {
                  setItems([
                    ...items.filter((item) => item.watch.id !== watch.id),
                    { watch, count: counter },
                  ]);
                }
              }}
              className="flex text-white bg-primary p-3 gap-2 hover:bg-white hover:text-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"
                />
                <path
                  fill="currentColor"
                  d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5"
                />
                <path
                  fill="currentColor"
                  d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 w-full aspect-[275/370] animate-pulse" />
      )}
      {watch && (
        <button
          onClick={() => {
            toggleFavorite(watch);
          }}
          className="absolute bottom-6 right-0 p-2 text-primary"
        >
          {!hasFav(watch) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"
              />
            </svg>
          )}
        </button>
      )}
      <div className=" py-3 space-y-2">
        {watch ? (
          <h2 className=" font-semibold text-sm">{watch.brand}</h2>
        ) : (
          <div className="bg-gray-100 w-1/2 h-5 animate-pulse" />
        )}
        {watch ? (
          <h3 className="text-xs text-gray-600">{watch.title}</h3>
        ) : (
          <div className="bg-gray-100 w-3/4 h-5 animate-pulse" />
        )}
        <div className="mt-2">
          {watch ? (
            <span className="font-base text-primary">
              ${watch.price?.toFixed(2)}
            </span>
          ) : (
            <div className="bg-gray-100 w-1/4 h-5 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
