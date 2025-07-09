import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/header/Header';
import ExploreMenu from '../../components/explore_menu/ExploreMenu';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';

const Home = () => {

  const [catagory,setCatagory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu  catagory={catagory} setCatagory={setCatagory}/>
      <FoodDisplay catagory={catagory} />
    </div>
  )
}

export default Home
