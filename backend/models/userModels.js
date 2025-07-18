import mongoose from 'mongoose'

const userSchma = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cart:{type:Object,default:{}}
},{minimize:false})


const userModel = mongoose.models.user || mongoose.model("user",userSchma)

export default userModel