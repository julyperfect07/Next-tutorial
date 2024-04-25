"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
