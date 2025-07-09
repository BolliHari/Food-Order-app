import express from "express"
import { placeOrders } from "../controllers/orderController"

const orderRouter = express.Router()


orderRouter.post("/place",placeOrders)


export default orderRouter