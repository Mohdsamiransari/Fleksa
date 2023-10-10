import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    Dish_image:{
        type: String
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type: Number,
        required:true,
        default: 0.0
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Dish = mongoose.models.Dish || mongoose.model("Dish",dishSchema)

export default Dish;