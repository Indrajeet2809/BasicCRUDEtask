const express = require(express);
const app = express()

app.get('/' ,async(req,res)=>{
    try{
        res.send("server is running");
    }
    catch(error){
        console.log(error)
    }
})

app.listen(3000,()=>{
    console.log("server is running")
})