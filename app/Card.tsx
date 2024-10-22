import { useWatches } from "./useWatches";

export function Card({watch}) {
  const {hasFav, toggleFavorite} = useWatches();

  return (
    <div className="relative">
      {watch ? (
        <img
          src={watch.imageURL}
          alt="watch"
          className="w-full aspect-[275/370] bg-gray-100 object-cover"
        />
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
