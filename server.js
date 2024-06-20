import express from "express"
import cors from "cors"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json())
app.use(cors())
// DB-Connection
connectdb();
// api endpoints (this is provide because to select from the food comes)
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working");
}) 
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

