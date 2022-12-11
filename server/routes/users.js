import express from "express"

import { login, signup,getUsers } from "../controllers/users.js"
const router = express.Router()

router.get("/", getUsers)

router.get("/login", login)
router.post("/signup", signup)

export default router

