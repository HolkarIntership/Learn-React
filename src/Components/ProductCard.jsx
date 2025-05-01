import React from "react";

const ProductCard = ({ product }) => {

  return (
    <div className="product-card" key={product.id}>
      <img className="product-image" src={product.image} />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
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
