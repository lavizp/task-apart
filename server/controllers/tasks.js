import express  from "express";
import mongoose from "mongoose";

import TasksModel from "../models/Tasks.js";
import UserModel from "../models/User.js";
const router = express.Router()

export const getTasks = async(req,res) =>{
    const {id} = req.params
    try{

        const user = await UserModel.findById(id)
        res.status(200).json(user.tasks)
    }catch(e){
        res.status(404).send(e)

  }
}

export const getTask = (req,res) =>{
    const {id} = req.params
    try{
        const task = TasksModel.findById(id)
        res.status(200).json(task)
    }catch(e){
        res.status(404).send(e)
    }
}

export const createTask = async(req,res) =>{
    try{

        const {id} = req.params
        const {title, description,catogery, state, image } = req.body
        const newTask = new TasksModel({title, description,catogery, state, image })
        const user = await UserModel.findById(id)
        console.log(user.tasks)
        // await UserModel.findByIdAndUpdate(id, {tasks: user.tasks.push(newTask)})
        user.tasks.push(newTask)
        await user.save()
        res.status(200).json(newTask)
    }catch(e){
        res.status(404).send(e)

    }
}
export const updateTask = async(req,res) =>{
    const {uid} = req.params
    if (!mongoose.Types.ObjectId.isValid(uid)) return res.status(404).send(`No post with id: ${uid}`);

    const {id,title, description,catogery, state, image } = req.body

    const updatedTask = {id,title, description,catogery, state, image}
    try{
        const user = await UserModel.findById(uid)

        user.tasks.map((item)=>{
            if(item._id == id){
                item.catogery = catogery
            }
        })
        await user.save()
        res.status(200).json(updatedTask)
    }catch(e){
        console.log(e)
        res.status(404).send(e)
    }
}
export const deleteTask = async(req,res) =>{
    const {uid} = req.params
    if (!mongoose.Types.ObjectId.isValid(uid)) return res.status(404).send(`No post with id: ${uid}`);
    const {id} = req.body
    try{
        let user = await UserModel.findById(uid)
        await UserModel.findByIdAndUpdate(uid, {tasks: user.tasks.filter((item)=> item._id != id)})
        user.tasks.filter((item)=> item._id != id)
        await user.save()
        res.status(200).send("done deleting")
    }catch(e){
        res.status(404).send(e)
    }
}

export default router