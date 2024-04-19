import React from "react";
import { Metadata } from "next";
import { resolve } from "path";

interface Params {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: ` ${title} `,
  };
};

export default function DetailedProduct({ params }: Params) {
  return <h1>Details about product {params.productId} </h1>;
}
