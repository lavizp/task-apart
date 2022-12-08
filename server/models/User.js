import mongoose from "mongoose";
import TasksModel from "./Tasks";
const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    bio: String,
    role: String,
    profileImage: String,
    banner: String,
    tasks: [TasksModel],
    password: String

})

let UserModel = mongoose.model("Tasks", TaskSchema);
export default UserModel;