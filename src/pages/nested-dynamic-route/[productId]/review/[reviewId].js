import React from "react";
import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      Review Page - Product Id {productId} and Review Id {reviewId}
    </div>
  );
}
