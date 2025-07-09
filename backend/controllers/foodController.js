import foodModel from "../models/foodModels.js";
import fs from 'fs';

const addfood = async (req,res) => {
    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save()
        res.json({succuss:true,massage:"Food added"})
    } catch (error) {
        console.log(error)
        res.json({succuss:false,massage:"error"})
    }

}


const food_list = async (req,res) => {
    try {
        const foods = await foodModel.find({})
        res.json({succuss:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({succuss:false,message:"error"})
    }
}

const removefood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink( `uploads/${food.image}`,() => {})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({sussuss:true,message:"food removed"})
    } catch (error) {
        console.log(error)
        res.json({sussuss:false,message:"error"})
    }
}


export {addfood,food_list,removefood}