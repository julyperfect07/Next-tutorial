import React from "react";

interface Params {
  params: {
    productId: string;
  };
}

export default function DetailedProduct({ params }: Params) {
  return <h1>Details about product {params.productId} </h1>;
}
