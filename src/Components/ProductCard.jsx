import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product,}) => {

  return (
    <div className="product-card" key={product.id}>
      
      <img className="product-image" src={product.images[0]} />
      <div className="product-details">
        {/* <h3 className="product-title" onClick={() => setProductId(product.id)}>{product.title}</h3> */}
        <Link className="product-title" to={`/product/${product.id}`}>{product.title}</Link>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
