const mongoose= require("mongoose")

const connectDb= async()=>{
    try{
      // await mongoose.connect("mongodb+srv://indrajeetraj2809:aZ6ZfstxqaSUp4QB@cluster0.vv6up.mongodb.net/task");
      await mongoose.connect(process.env.MONGO_URI)
        console.log('db is connected')
    }
    catch(error){
        console.log(error)
    }
}
module.exports = connectDb