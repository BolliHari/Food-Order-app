// components/FoodDisplay.jsx
import React, { useContext } from 'react';
import './FoodDisplay.css'
import FoodItem from './fooditem/fooditem';
import { StoreContext } from '../../context/StoreContext';
import { useState } from 'react';
// import axios from axios;

const FoodDisplay = ({catagory}) => {
  
    const {food_list} = useContext(StoreContext)

    
    
    

  return (
    <div className='food-display'>
        <h2>Top Menu Food here</h2>
        <div className='food-display-list'>
            {food_list.map((item,index) => {
                if(catagory==="All" || catagory === item.category){
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
            }
            })}
        </div>
    </div>
  );
};

export default FoodDisplay;
