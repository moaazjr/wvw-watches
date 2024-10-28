"use client";

import Link from "next/link";
import { useContext } from "react";
import { userContext } from "./login/useUser";
import { cartContext, CartProvider } from "./useCart";

export function Navbar({ setOpen }) {
  const { user, logout } = useContext(userContext);
  const { items } = useContext(cartContext);

  return (
    <div>
      {/* upper nav */}
      <p className=" bg-secondary text-white py-1 overflow-hidden whitespace-nowrap font-light text-center text-xs w-full uppercase">
        ENTARY WORLDWIDE DELIVERY, LIFETIME JEWELLERY WARRANTY & 30 DAY RETURNS
        COMPLIMENTARY WORLDWIDE DELIVERY, LIFETIME JEWI Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolorum dolore deserunt inventore!
      </p>

      {/* lower nav */}
      <div>
        <ul className="uppercase flex items-center divide-x divide-gray-300 border-b border-gray-300 text-primary">
          <li className="font-extrabold flex-1 text-center p-4 py-8">
            WVW A T C H E R
          </li>
          <li className="flex-1 text-center p-4 py-8">new</li>
          <li className="flex-1 text-center p-4 py-8 text-white bg-primary font-medium">
            women
          </li>
          <li className="flex-1 text-center p-4 py-8">men</li>
          <li className="flex-1 text-center p-4 py-8">bestselling</li>
          <li className="p-5 py-8">
            <button onClick={() => setOpen(true)}>
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
            </button>
          </li>
          <li className="p-5 py-8">
            <div className="relative">
              <span className="bg-secondary rounded-full text-center text-[10px] h-4 w-4 grid place-items-center text-white absolute -bottom-1 -right-1">
                {items.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.count,
                  0
                )}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M3.794 14.97c.537 2.687.806 4.03 1.693 4.895q.247.24.53.434C7.04 21 8.41 21 11.15 21h1.703c2.739 0 4.108 0 5.13-.7q.285-.196.53-.435c.888-.865 1.157-2.208 1.694-4.894c.771-3.856 1.157-5.784.269-7.15a4 4 0 0 0-.56-.683C18.75 6 16.785 6 12.853 6H11.15c-3.934 0-5.9 0-7.066 1.138a4 4 0 0 0-.559.683c-.888 1.366-.502 3.294.27 7.15Z"
                  />
                  <circle cx="15" cy="10" r="1" fill="currentColor" />
                  <circle cx="9" cy="10" r="1" fill="currentColor" />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M9 6V5a3 3 0 1 1 6 0v1"
                  />
                </g>
              </svg>
            </div>
          </li>
          <li className="p-5 py-8">
            <div className="relative">
              {!user ? (
                <Link href="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                    />
                  </svg>
                </Link>
              ) : (
                <button onClick={logout}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 3.25a.75.75 0 0 1 0 1.5a7.25 7.25 0 0 0 0 14.5a.75.75 0 0 1 0 1.5a8.75 8.75 0 1 1 0-17.5"
                    />
                    <path
                      fill="currentColor"
                      d="M16.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H10a.75.75 0 0 1 0-1.5h8.19z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
