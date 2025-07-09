import { createContext, useState,useEffect } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const [cartItems,setcartItems] = useState({})
    const url = "https://food-order-app-lkuf.onrender.com"
    const [token,setToken] = useState("")
    const [food_list,setFood_list] = useState([])

    const fetchFoodList = async () => {
      const response = await axios.get(`${url}/api/food/list`)
      setFood_list(response.data.data)
      console.log(response.data.data)
    }

    useEffect(() => {
        async function loadData(){
            await fetchFoodList();
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
                await laodCartData(savedToken)
            }
        }
        loadData()
    }, []);

    const addToCart = async (id) =>{
        if(!cartItems[id]){
            setcartItems(prev => ({...prev,[id]:1}))
        }
        else{
            setcartItems(prev => ({...prev,[id]:prev[id] + 1}))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId:id},{headers:{token}})  
        }
    }

    const removeToCart = async (id) => {
        setcartItems(prev => ({...prev,[id]:prev[id] - 1}))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId:id},{headers:{token}})  
        }
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let proinfo = food_list.find((product) => product._id === item);
                totalAmount += proinfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const laodCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setcartItems(response.data.cart)
    }

    console.log(token)


    const contextValue = {
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeToCart,
        getTotalCartAmount,
        url,
        setToken,
        token
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
    
}

export default StoreContextProvider;
