import React from "react";

interface Params {
  params: {
    productId: String;
    reviewId: String;
  };
}

const ReviewDetail = ({ params }: Params) => {
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetail;
