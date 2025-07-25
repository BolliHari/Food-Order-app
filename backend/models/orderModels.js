import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModel = mongoose.models.orders || mongoose.model("orders",orderSchema)

export default orderModel