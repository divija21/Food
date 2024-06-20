import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";
import 'dotenv/config'



export const loginUser= async(req,res)=>{

}
// const createToken = (id)=>{
// return jwt.sign({id},process.env.JWT_SECRET)
// }
const createToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};
export const registerUser = async(req,res)=>{
    // destructure name,pass ,email into request body.
    console.log('accessed register user');
    const {name,password,email}=req.body;
    console.log(name,password,email);
    try{
        // checking user already exist
const exist = await userModel.findOne({email});
if(exist){
    return res.json({sucess:false ,message:"User already exist"})
}
// email format and strong password
if(!validator.isEmail(email))
    {
return res.json({sucess:false,message:"please enter a valid email"})
    }
    if(password.length<8)
        {
            return res.json({success:false,message:"please enter a strong password"})
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
   const newUser = new userModel({
    name:name,
    email:email,
    password:hashPassword

   })
   const user = await newUser.save()
   const token = createToken(user._id);
   res.json({success:true,token});

}
  catch(error){
    console.log(error);
    res.json({success:false, message:"Error"});

  }
}
// bycrypt algorithim used for creating strong and tested hashing algorightim
// password can not be saved in plaintext format in database first we have to use and hashing it .
// 
