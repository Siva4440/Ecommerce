import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((item)=> item.id===Number(productId))
  console.log("prod",productId)

  return (
    <div>
     <div>
     <BreadCrum product={product} />
     </div>
     <div>
      <ProductDisplay product={product} />
     </div>
    </div>
  )
}

export default Product
