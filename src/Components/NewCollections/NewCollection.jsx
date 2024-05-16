import React from 'react';
import new_collection from '../Assets/new_collections'
import Item from '../Items/Item';
import './NewCollection.css'

const NewCollection = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collection-item'>
            {new_collection && 
                new_collection.map((item,index)=>{
                    return(
                        <Item key={index}  id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NewCollection
