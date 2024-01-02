import 'dotenv/config';
import express from 'express';
const app = express();
const port = process.env.PORT;

console.log(process.env);
app.get("/", (req, res)=>{
    return res.status(200).json({msg: "ok report"})
})
app.listen(port, ()=>{
        console.log("Server is running");
})