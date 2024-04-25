import Link from "next/link";
import React from "react";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}

export default Home;
