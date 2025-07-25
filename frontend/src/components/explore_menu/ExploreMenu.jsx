import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({catagory,setCatagory}) => {
  return (
    <div className='explore-menu' id='menu'>
      <h1>Explore Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi nostrum non quae nemo. Eaque.
      </p>
      <div className='explore-menu-items'>
        {menu_list.map((item,index) =>{
            return(
                <div onClick={() => setCatagory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className="exlpore-menu-item">
                    <img className={catagory === item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr />
    </div>
  )
}

export default ExploreMenu
