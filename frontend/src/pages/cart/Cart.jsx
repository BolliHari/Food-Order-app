import React, { useContext } from 'react'
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {


  const {food_list,cartItems,removeToCart,getTotalCartAmount,url} = useContext(StoreContext)


  const navigate = useNavigate();

  return (
    <div className='cart'> 
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index) => {
            if(cartItems[item._id] > 0){
              return(
                <>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{cartItems[item._id]*item.price}</p>
                <p onClick={() => removeToCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
                </>
              )
            }
          })
        }
      </div>
      <div className="cart-bootom">
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
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
