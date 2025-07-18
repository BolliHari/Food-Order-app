import jwt from "jsonwebtoken"

const authMiddleWare = async (req,res,next) => {
    const {token} = req.headers
    if(!token){
        return res.json({succuss:false,message:"Not Authorized Login Again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({succuss:false,message:"error"})
    }
}


export default authMiddleWare;