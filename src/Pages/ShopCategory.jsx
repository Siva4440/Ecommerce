import React, { useContext } from 'react';
import './CSS/Shop_Category.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop_category'>
      <img src={props.banner} alt="banner" className='shop-category-banner' />
      <div className='shop-category-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
            sort by <img src={dropdown_icon} alt="dropDown_icon" />
        </div>
      </div>
      <div className="shop-category-products">
            {all_product.map((item,index)=>{
              if(props.category=== item.category){
                return <Item key={index}  id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}  />
              } else{
                return null
              }
            })}
        </div>
        <div className='shop-category-loadMore'>
            Explore More
        </div>
    </div>
  )
}

export default ShopCategory
