import React from 'react';
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='news-letter'>
        <div className='news'>
        <h1>Get Execlusice Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='news-details'>
            <input type='email' placeholder='Your Email id...' />
            <button>Subscribe</button>
        </div>
        </div>
    </div>
  )
}
