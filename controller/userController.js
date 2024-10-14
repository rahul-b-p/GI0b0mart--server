const logdatas = require("../models/userModel")
const jwt = require('jsonwebtoken')



exports.registerController =async(req,res)=>{
    const {username,email,password} = req.body
    console.log(username,email,password);
    
    try {
        const exisyingUser= await logdatas.findOne({email})
        console.log(exisyingUser);
        if(exisyingUser){
            res.status(406).json('User Already Exists')
        }
        else{
            const newUser= new logdatas({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.loginController =async(req,res)=>{
    const {email,password} = req.body    

    try {
        const existingUser = await logdatas.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},'globomartkey')
            res.status(200).json({existingUser,token})    
        }
        else{
            res.status(406).json('Incorrect Password or UserName')
        }
    } catch (error) {
        res.status(401).json(error)
    }
}