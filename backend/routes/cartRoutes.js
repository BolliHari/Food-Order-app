import express from "express";
import { addToCart, getCart, removeToCart } from "../controllers/cartController.js";
import authMiddleWare from "../middleware/auth.js";

const cartRouter = express.Router()

cartRouter.post('/add',authMiddleWare,addToCart)
cartRouter.post('/remove',authMiddleWare,removeToCart)
cartRouter.post('/get',authMiddleWare,getCart)


export default cartRouter;