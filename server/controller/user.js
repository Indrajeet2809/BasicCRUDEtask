const User = require("../model/user");

const register = async(req,res)=> {
    try{
        const {name, email, password, phone}= req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'user is already registered'})
        }
        const newUser = new User({
            name,
            email,
            password,
            phone
        })
        await newUser.save();
        res.status(201).json({message: 'user is created'})
    }catch(error){ 
        console.log(error)
        return res.status(500).json({message: error})
    }
}

const login = async(req,res)=> {
    try{
        const {email, password}= req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({message:'user is not registered'})
        }
        if(existingUser.password !== password){
            return res.status(400).json({message: 'incorrect password'})
        }
        res.status(200).json({message: 'login successfully', user:existingUser})
    }catch(error){ 
        console.log(error)
        return res.status(500).json({message: error})
    }
}
const editProfile = async(req,res)=> {
    try{
        
        const {name,  phone, email}= req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({message:'user is not registered'})
        }
        
        existingUser.name= name || existingUser.name;
        existingUser.phone = phone || existingUser.phone;
        await existingUser.save();
        res.status(200).json({message: 'user is updated'})
    }catch(error){ 
        console.log(error)
        return res.status(500).json({message: error})
    }
}

const deleteProfile = async(req,res)=> {
    try{
        const {email}= req.body;
        const existingUser = await User.deleteOne({email})
        if(!existingUser){
            return res.status(400).json({message:'user is not deleted'})
        }
        
        res.status(200).json({message: 'user is deleted'})
    }catch(error){ 
        console.log(error)
        return res.status(500).json({message: error})
    }
}

module.exports = {
    register,
    login,
    editProfile,
    deleteProfile
}