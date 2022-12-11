import mongoose from "mongoose";
import TasksModel from "./Tasks.js";
const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    bio: String,
    role: String,
    profileImage: String,
    banner: String,
    tasks: [TasksModel.schema],
    password: String

})

let UserModel = mongoose.model("Users", UserScheme);
export default UserModel;