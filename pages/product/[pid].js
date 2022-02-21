import React from "react";
import { useRouter } from "next/router";

function product() {
  const router = useRouter();
  const { pid } = router.query;

  return <div>{"product no: " + pid}</div>;
}

export default product;
