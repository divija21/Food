// import foodModel from "../models/foodModel.js";
// import fs from 'fs'
// // add food items
// const addFood = async(req,res)=>{
// let image_filename = `${req.file.filename}`;
// //whenever this api hits all these detail will be show on the screen
// const food =new foodModel({
//     name:req.body.name,
//     description:req.body.description,
//     price:req.body.price,
//     category:req.body.category,
//     image:image_filename
// })
// try {
//     await food.save();
//     res.json({success :true,message:"Food Added"})
// } catch(error){
//     console.log(error);
//     res.json({success:false ,message:"Error"})
// }
// }
// // all food list
// const listFood =async(req,res)=>{
//     try{
//         const foods = await foodModel.find({});
//         res.json({succsss:true,data:foods})
//     }
//     catch(error)
//     {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }
// //remove food item
// const removeFood= async (req,res)=>{
//     try{
//         const food= await foodModel.find(req.boddy.id)
//         fs.unlink(`uploads/${food.image}`,()=>{})
//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({success:true,message:"food removed"})
        
//     }
//     catch(error)
//     {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }
// export {addFood,listFood,removeFood} 
// // route works on client site if some changes on page it only update teh component 
// // controller responsible for  server side like apllication 
// // in addFood we are writting the logic of how to data into the database
// // whenever the api (Addfood) hits then food data goes into the body and in backend food funtion will work
// // response-json
import foodModel from "../models/foodModel.js";
import fs from 'fs';
import path from 'path';

// Add food items
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    // Create a new food item instance
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        // Save the food item to the database
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error adding food item" });
    }
};

// List all food items
const listFood = async (req, res) => {
    try {
        // Fetch all food items from the database
        console.log("List Food items request received");
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching food items" });
    }
};

// Remove a food item
const removeFood = async (req, res) => {
    try {
        // Find the food item by ID
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        // Delete the food image from the filesystem
        const imagePath = path.join('uploads', food.image);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error(`Error deleting image file: ${err}`);
            }
        });
        // fs.unlink(`uploads/${food.image}`,()=>{})

        // Delete the food item from the database
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error removing food item" });
    }
};

export { addFood, listFood, removeFood };
