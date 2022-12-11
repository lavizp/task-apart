import express  from "express";
import UserModel from "../models/User.js";

const router = express.Router()

export const login = async(req,res) =>{
    try{
        const {username, password} = req.body
        let users = await UserModel.find()
        let user = (users.find((item)=> item.username === username))
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
export const signup = (req,res) =>{



}

export default router