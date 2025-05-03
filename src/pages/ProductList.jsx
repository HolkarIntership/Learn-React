import React, { useId, useState } from "react";

import ProducatList from "../utils/Data";
import ProductCard from "../Components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState(ProducatList);
  const [searchData, setSearchData] = useState("");

  function inputval(param) {
    setSearchData(param.target.value);
  }

  const filterdata = products.filter((val) => {
    return val.title.toLowerCase().includes(searchData);
  });

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <input
          type="text"
          placeholder="search items"
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "5px",
            marginBottom: "20px",
            padding: "5px",
          }}
          onChange={inputval}
          // onChange={(event) => {
          //   setSearchData(event.target.value);
          // }}
        />
      </div>
      <div className="product-list">
        {filterdata.length > 0 ? (
          filterdata.map((val, index) => {
            return <ProductCard product={val} key={index} />;
          })
        ) : (
          <p>No Product Found</p>
        )}
      </div>
      {/* <div className="product-list">
        {products.map((val, index) => {
          return <ProductCard product={val} key={index} />;
        })}
      </div> */}
    </div>
  );
};

export default ProductList;
