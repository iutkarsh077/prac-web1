import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    return res.status(200).json({msg: "ok report"})
})
app.listen(port, ()=>{
        console.log("Server is running");
})