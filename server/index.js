import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import taskRouter from './routes/tasks.js'
import userRouter from './routes/users.js'
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors());

dotenv.config()
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('strictQuery', false);

app.get("/", (req, res)=>{
  res.status(200).send({asd: "asd"})
})

app.use("/tasks", taskRouter)
app.use("/users", userRouter)

