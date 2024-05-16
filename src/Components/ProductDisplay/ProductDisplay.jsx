import React from "react";
import "./Product_Display.css";
import star_icon from "../../Components/Assets/star_icon.png";
import star_dull_icon from "../../Components/Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const {product} =props
  return (
    <div className="product-display-container">

      <div className="product-display-left">
        <div className="product-display-list">
          <img src={product.image} alt="logo" />
          <img src={product.image} alt="logo" />
          <img src={product.image} alt="logo" />
          <img src={product.image} alt="logo" />
        </div>
        <div className="product-display-image">
          <img src={product.image} alt="logo" />
        </div>
      </div>

      <div className="product-display-right">
        <h1> {product.name}</h1>
        <div className="product-display-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-prices">
          <div className="product-display-old">$ {product.old_price}</div>
          <div className="product-display-new">$ {product.new_price}</div>
        </div>
        <div className="product-display-description">
          A light weight Usually Knitted Pullover shirt Close -fitting and with
          a round neckline and shop_categorysleeves, worn as a undershirt or
          outer garment
        </div>
        <div className="product-display-sizes">
          <h4>Select Size</h4>
         <div className="product-display-sizes-list">
         <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
         </div>
        </div>
        <div className="product-display-btn-cart">
          <button>Add to Cart</button>
          <div className="display-product-footer">
            <p className="product-display-category"> <span>Category : </span> Women,T-Shirt,Crop Top</p>
            <p className="product-display-tags"> <span>Tags : </span> Modern,Latest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
