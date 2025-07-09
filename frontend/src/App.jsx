import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrdre from './pages/placeOrder/PlaceOrdre'
import Footer from './components/Footer/Footer'
import Login from './components/login/Login'

const App = () => {

  const [loginPopup,setLoginPop] = useState(false)

  return (
    <>
    {loginPopup?<Login setLoginPop={setLoginPop} />:<></>}
    <div className='app'>
      <Navbar setLoginPop={setLoginPop} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrdre />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
