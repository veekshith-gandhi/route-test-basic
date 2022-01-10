import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../src/static/index";
export const ProductDetails = () => {
  const { id } = useParams();

  console.log(products.product);
  return (
    <div>
      {products.product.filter((item) =>
        item.id == id ? <h1>{item.name}</h1> : ""
      )}
    </div>
  );
};
