import express from "express"

import { login, signup,getUsers, getUser } from "../controllers/users.js"
const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUser)

router.post("/login", login)
router.post("/signup", signup)

export default router

