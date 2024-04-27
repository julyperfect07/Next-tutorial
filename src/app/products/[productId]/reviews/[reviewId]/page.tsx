"use client";

import { notFound } from "next/navigation";
import React from "react";

interface Params {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ReviewDetail = ({ params }: Params) => {
  // const random = 0;
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetail;
