import React from 'react'
import Navbar from './components/navbar/Navbar'
import Siderbar from './components/sidebar/Siderbar'
import {Routes , Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/list/List'
import Orders from './pages/orders/Orders'
import { ToastContainer} from 'react-toastify';

const App = () => {
  const url = 'http://localhost:4000'
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Siderbar />
        <Routes>
          <Route path='/add' element = {<Add url={url}/>} /> 
          <Route path='/list' element = {<List url={url} />} /> 
          <Route path='/orders' element = {<Orders url={url} />} /> 
        </Routes>
      </div>
    </div>
  )
}

export default App
