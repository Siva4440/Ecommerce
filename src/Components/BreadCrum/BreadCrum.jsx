import React from "react";
import './Bread_crumb.css'
const BreadCrum = (props) => {
  const {product}= props;
  return (
    <div className="breadCrum">
      <div>HOME &gt; SHOP &gt; {product.category}&gt; {product.name}</div>
    </div>
  );
};

export default BreadCrum;
