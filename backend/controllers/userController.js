import userModel from "../models/userModels.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import { console } from "inspector/promises";




const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async (req,res) => {
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user){
            return res.json({succuss:false,message:"user doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({succuss:false,message:"invaild password"})
        }

        const token = createToken(user._id)
        res.json({succuss:true,token})
    } catch (error) {
        console.log(error)
        res.json({succuss:false,message:"error 4"})
    }
}


const registerUser = async (req,res) =>{
    const {name,password,email} = req.body
    try {
        const exist = await userModel.findOne({email})
        if (exist) {
            return res.json({succuss:false,message:"email already existed"})
        }

        if (!validator.isEmail(email)) {
            return res.json({succuss:false,message:"email is not vaild"})
        }

        if (password.length < 8) {
            return res.json({succuss:false,message:"set password Stronger"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedpassword
        })

        const user = await newUser.save()
        const token = createToken(user._id);
        res.json({succuss:true,token})

    } catch (error) {
        console.log(error)
        res.json({succuss:false,message:"error 4"})
    }
}

export {loginUser,registerUser}