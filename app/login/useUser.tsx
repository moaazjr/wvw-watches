"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext<{
  setUser: any;
  user: {
    email: string;
    pass: string;
    role: string;
  } | null;
  logout: any;
}>(null as any);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const rout = useRouter();

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (user && pathname == "/login") {
      router.push("/");
    }
  }, [user, pathname]);

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    rout.push("/login");
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <userContext.Provider value={{ setUser, user, logout }}>
      {children}
    </userContext.Provider>
  );
}
