import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrdre = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p>Delivery Infomation</p>
        <div className="multi-fields">
          <input type="text" placeholder='Frist name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='pin code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="number" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-taotal-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-taotal-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0?0:8}</p>
          </div>
          <hr />
          <div className="cart-taotal-details">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0?0:getTotalCartAmount() + 8}</b>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrdre
