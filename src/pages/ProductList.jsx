import React, { useState } from "react";

import ProducatList from "../utils/Data";
import ProductCard from "../Components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState(ProducatList);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((val, index) => {
          return <ProductCard product={val} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
