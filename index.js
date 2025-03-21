const express = require("express");


const app = express();
app.use(express.json());



app.use(cookieParser());
app.get("/",(req,res)=>{
    return res.send("HHHHHHHH");
})
app.get("/data",(req,res)=>{
    return res.send("Hello from backend server")
})


app.listen(8000,()=>{
    console.log("app is listening at 8000 port");
})
