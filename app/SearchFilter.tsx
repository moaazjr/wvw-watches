import { useState } from "react";

export function SearchFilter({ setOpen }) {
  const [searchData, setSearchData] = useState<any[] | null>(null);
  const [dafaultValue, setDafaultValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(searchData);
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className="fixed w-full h-full top-0 left-0 bg-white/5 backdrop-blur-sm flex justify-center items-center"
      ></div>

      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[500px] w-full space-y-3">
        <label className="flex p-3 items-center  bg-white rounded-lg gap-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
              />
            </svg>
          </span>
          <input
            value={dafaultValue}
            type="text"
            className="w-full outline-none"
            placeholder="Looking for something..."
            onChange={(e) => {
              setDafaultValue(e.target.value);

              setSearchData(null);
              if (e.target.value.trim() === "") {
                return;
              }

              setIsLoading(true);

              fetch(`/api/watches?search=${e.target.value}`)
                .then((res) => res.json())
                .then((json) => {
                  setTimeout(() => {
                    setSearchData(json);
                    setIsLoading(false); // Now it's inside the setTimeout
                  }, 2000); // 3-second delay before setting the data
                })
                .catch((err) => {
                  console.error(err);
                  setIsLoading(false); // Make sure loading stops even on error
                });
            }}
          />

          {dafaultValue && (
            <button
              onClick={() => {
                setDafaultValue("");
                setSearchData(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </button>
          )}
        </label>


        <div
        data-hidden={!dafaultValue}
        className="bg-white rounded-lg p-4 max-h-[500px] overflow-y-auto grid gap-4 data-[hidden=true]:hidden">

          {searchData?.map((data) => (
            <div key={data.id} className=" flex items-center gap-5">
              <span className="">
                <img
                  src={data.imageURL}
                  alt="watch"
                  className="size-16 rounded-full object-cover bg-gray-100"
                />
              </span>

              <div>
                <h2 className="font-semibold">{data.title}</h2>
                <span>${data.price}</span>
              </div>
            </div>
          ))}
          {isLoading &&
            [...Array(5)].map(() => (
              <div className="flex items-center gap-5">
                <div className="bg-gray-100 animate-pulse size-16 rounded-full " />
                <div className="flex-1 space-y-2">
                  <div className="w-3/4 h-4 block bg-gray-100 animate-pulse rounded-lg" />
                  <div className="w-1/4 h-4 bg-gray-100 animate-pulse rounded-lg" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
