import React from "react";

const ProductCard = ({ image, title }) => {
    
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img"/>
      <h5>{title}</h5>
    </div>
  );
};

export default ProductCard;
