import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import path from "path"
import { fileURLToPath } from "url"
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";

const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

connectDB();

app.use('/images', express.static(path.join(__dirname, 'uploads')))

app.use("/api/food",foodRouter)
app.use("/api/user",userRouter)
app.use('/api/cart',cartRouter)
app.use("/api/order",orderRouter)


app.get('/',(req,res) =>{
    res.send("API working")
})





app.listen(port,() => {
    console.log(`server started at http://localhost:${port}`)
})