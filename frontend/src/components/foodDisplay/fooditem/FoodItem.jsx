import React, { useContext, useState } from 'react'
import { assets } from '../../../assets/frontend_assets/assets';
import './FoodItem.css';
import { StoreContext } from '../../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

  

  const {cartItems,addToCart,removeToCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" /
        >
        {
          !cartItems[id]? <img src={assets.add_icon_white} className='add' onClick={() => addToCart(id)} />:
          <div className='food-item-count'>
            <img src={assets.remove_icon_red} alt="" onClick={() => removeToCart(id)}/>
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)}/>
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-review">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-disc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem

