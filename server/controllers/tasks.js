import express  from "express";
import mongoose from "mongoose";

import TasksModel from "../models/Tasks.js";

const router = express.Router()

export const getTasks = async(req,res) =>{
    try{

        const tasks = await TasksModel.find()
        res.status(200).json(tasks)
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
    const {title, description,catogery, state, image } = req.body

    const newTask = new TasksModel({title, description,catogery, state, image })
    try{
        await newTask.save()
        res.status(200).json(newTask)
    }catch(e){
        res.status(404).send(e)
    }
}
export const updateTask = async(req,res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const {title, description,catogery, state, image } = req.body

    const updatedTask = {id,title, description,catogery, state, image }
    try{
        await TasksModel.findByIdAndUpdate(id, updatedTask)
        res.status(200).json(updatedTask)
    }catch(e){
        res.status(404).send(e)
    }
}
export const deleteTask = async(req,res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    try{
        await TasksModel.findByIdAndRemove(id)
        res.status(200).send("done deleting")
    }catch(e){
        res.status(404).send(e)
    }
}

export default router