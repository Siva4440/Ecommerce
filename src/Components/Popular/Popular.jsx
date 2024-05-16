import React from 'react';
import data from '../Assets/data'
import Item from '../Items/Item';
import './Popular.css'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}  />
            })}
        </div>
      
    </div>
  )
}

export default Popular
