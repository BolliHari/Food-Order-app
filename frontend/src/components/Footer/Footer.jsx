import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptate, iusto id similique, odit facere maiores</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contant US</li>
                <li>Vizag</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Details</h2>
            <ul>
                <li>9702l8383</li>
                <li>Bolli@gamil.com</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
