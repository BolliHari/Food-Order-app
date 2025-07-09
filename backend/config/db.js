import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bollihari1234:bollihari@cluster0.fpxy5es.mongodb.net/foodapp').then(() => console.log("DB connected"));
}