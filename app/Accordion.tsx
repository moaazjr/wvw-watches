"use client";

import { ReactNode, useState } from "react";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-4 text-sm uppercase"
        onClick={() => setOpen((open) => !open)}
      >
        <span className="text-sm">{title}</span>
        <span className={`${!open ? "rotate-180" : "rotate-0"} duration-300`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#616161"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m17 14l-5-5l-5 5"
            />
          </svg>
        </span>
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  );
}
