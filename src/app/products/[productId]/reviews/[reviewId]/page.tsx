import { notFound } from "next/navigation";
import React from "react";

interface Params {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ReviewDetail = ({ params }: Params) => {
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
