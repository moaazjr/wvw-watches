"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { userContext } from "./useUser";

const users = [
  { email: "sami@gmail.com", pass: "123", role: "user" },
  { email: "moaaz@gmail.com", pass: "321", role: "admin" },
];

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const { setUser } = useContext(userContext);
  const router = useRouter();


  return (
    <div className="bg-primary flex items-center justify-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const findedUser = users.find(
            (user) => user.email === form.email && user.pass === form.password
          );

          if (!findedUser) {
            setMsg("E-mail or Password is incorrect.");
            setForm({ email: "", password: "" });
            return;
          }
          setUser(findedUser);

          localStorage.setItem("user", JSON.stringify(findedUser));

          router.push("/");
        }}
        className="grid gap-4 text-white max-w-[400px] w-full"
      >
        <div className="font-extrabold text-center text-xl text-secondary py-4">
          <div>WVW A T C H E R</div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Get Started</h1>
          <p className="text-white/50">
            Welcome to wvwatcher - Let's create your account
          </p>
        </div>
        <hr className="my-4 opacity-20" />
        <label className="grid gap-1">
          <span>E-mail</span>
          <input
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setMsg("");
            }}
            value={form.email}
            type="email"
            className="p-3 bg-gray-700 placeholder:text-white/50"
            placeholder="Enter your email address"
          />
        </label>
        <label className="grid gap-1  mb-4">
          <span>Password</span>
          <input
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
              setMsg("");
            }}
            value={form.password}
            type="password"
            className="p-3 bg-gray-700 placeholder:text-white/50"
            placeholder="Enter your password"
          />
        </label>
        {msg && <span className="text-red-500">{msg}</span>}
        <button className="p-3 bg-secondary">Login</button>
      </form>
    </div>
  );
}
