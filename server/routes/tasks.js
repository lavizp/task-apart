import express from "express"

import { getTasks, updateTask, createTask,deleteTask  } from '../controllers/tasks.js'
const router = express.Router()

router.get("/:id", getTasks)
router.post("/:id", createTask)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)



export default router