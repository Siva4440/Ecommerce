import React from 'react';
import './Offers.css';
import execlusice_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Execlusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className='offers-right'>
            <img src={execlusice_img} alt="" />
      </div>
    </div>
  )
}

export default Offers
