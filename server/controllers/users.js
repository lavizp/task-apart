import express  from "express";
import UserModel from "../models/User.js";

const router = express.Router()

export const login = async(req,res) =>{
    try{
        const {username, password} = req.body
        let user = await UserModel.findOne({username})
        if(!user){
            res.status(404).send("Username Not Found")
            return
        }
        if(user.password !== password){ 
            res.status(404).send("Passwords Do Not Match")
            return
        }
        res.status(200).json(user)
    }catch(e){
        res.status(404).send(e)            
    }
}
export const signup = async(req,res) =>{
    try{
        const {name, username, password, role, profileImage, banner} = req.body
        const newUser = new UserModel({name, username, password, role, profileImage, banner})
        await newUser.save()
        res.status(200).json(newUser)

    }catch(e){
        res.status(404).send(e)

    }


}

export const getUsers = async(req,res)=>{
    try{
        let users = await UserModel.find()
        res.status(200).json(users)
    }catch(e){
        res.status(404).send(e)
            
    }
}
export const getUser = async(req,res)=>{
    try{
        let {id} = req.params
        let user = await UserModel.findById(id)
        res.status(200).json(user)
    }catch(e){
        res.status(404).send(e)
            
    }
}
export default router