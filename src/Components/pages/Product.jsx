import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../../src/static/index";
export const ProductPage = () => {
  return (
    <div>
      {products.product.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {item.name}
          <Link to={`/product/${item.id}`}>more details</Link>
        </div>
      ))}
    </div>
  );
};
