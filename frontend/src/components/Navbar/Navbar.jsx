import React, { useState ,useEffect} from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setLoginPop}) => {

  const [menu, setMenu] = useState("home");

  const {token,setToken} = useContext(StoreContext)

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }


  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='nav-logo'/>
      <ul className="navbar-menu">
        <li className={menu === "home"?"active":""} onClick={() => {setMenu("home")}}>Home</li>
        <li className={menu === "menu"?"active":""} onClick={() => {setMenu("menu")}}>Menu</li>
        <li className={menu === "mobile"?"active":""} onClick={() => {setMenu("mobile")}}>Moblie-App</li>
        <li className={menu === "contact"?"active":""} onClick={() => {setMenu("contact")}}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon">
            <Link to="/cart" ><img src={assets.basket_icon} alt="" /></Link>
            <div className="nav-dot"></div>
        </div>
        {!token?<button className="nav-btn" onClick={() => setLoginPop(true)}>Sign up</button>:
        <div className='nav-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
            </ul>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar
