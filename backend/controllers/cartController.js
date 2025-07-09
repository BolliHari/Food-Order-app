import userModel from "../models/userModels.js"


const addToCart = async (req,res) => {
    try {
        let user = await userModel.findOne({_id:req.body.userId})
        let cart = await user.cart
        if(!cart[req.body.itemId]){
            cart[req.body.itemId] = 1 
        }
        else{
            cart[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cart})
        res.json({succuss:true,message:'Added to Cart'})
    } catch (error) {
        console.log(error)
        res.json({succuss:false,message:"error"})
    }
}


const removeToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cart = await userData.cart
        if (cart[req.body.itemId] > 0) {
            cart[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cart})
        res.json({succuss:true,cart})

    } catch (error) {
        console.log(error)
        res.json({succuss:false,message:"error"})
    }
}

const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cart = await userData.cart
        res.json({succuss:true,cart})
    } catch (error) {
        console.log(error)
        res.json({succuss:false,message:"error"})
    }
}


export {addToCart,removeToCart,getCart}