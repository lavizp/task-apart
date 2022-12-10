import express from "express"

import { getTasks, updateTask, createTask  } from '../controllers/tasks.js'
const router = express.Router()

router.get("/", getTasks)
router.post("/", createTask)
router.patch("/:id", updateTask)


export default router