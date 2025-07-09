import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Login = ({setLoginPop}) => {

    const {url,setToken} = useContext(StoreContext)

    const [currState,setCurrState] = useState("Sign Up")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })


    const onChandlerHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data,[name]:value}))
    }

    const onSumbithandler = async (event) => {
      event.preventDefault();
      let newUrl = url
      if (currState === "Login") {
        newUrl += '/api/user/login'
      }else{
        newUrl += '/api/user/register'
      }
      const response = await axios.post(newUrl,data)
      console.log(response.data)
      if (response.data.succuss) {
       setToken(response.data.token)
       localStorage.setItem("token",response.data.token)
       setLoginPop(false)
      }else{
        alert(succuss.data.message)
      }
    }
    

  return (
    <div className='login-popup'>
            <form className="login-popup-container">
                
                <div className="login-popup-title">
                    <h2>{currState === "Sign Up"?"Sign Up":"Login"}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setLoginPop(false)} />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up"?<input name='name' value={data.name} onChange={onChandlerHandler} type="text" placeholder='Enter Name' required/>:""}
                    <input name='email' value={data.email} type="email" onChange={onChandlerHandler} placeholder='Enter Email' />
                    <input name='password' value={data.password} type="password" onChange={onChandlerHandler} placeholder='password'/>
                </div>
                <button onClick={onSumbithandler}>{currState}</button>
                {currState === "Sign Up"?<p>Already have Account? <span onClick={() => setCurrState("Login")}>Click Here</span></p>:<p>Create new Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>}
            </form>
    </div>
  )
}

export default Login
