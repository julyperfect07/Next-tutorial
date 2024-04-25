"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import "./styles.css";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {navLink.map((link) => {
        const isActive = pathname == link.href;
        return (
          <Link
            href={`${link.href}`}
            key={link.name}
            className={
              isActive ? " font-bold mr-4" : " text-blue-500 mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
