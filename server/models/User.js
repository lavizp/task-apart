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
    password:{
        type: String,
        require: true
    },
    role: String,
    profileImage: {
        type: String,
        default: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png"
    },
    banner: {
        type: String,
        default: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png"
    },
    tasks: {
        type:[TasksModel.schema],
        default: []    
    }
})

let UserModel = mongoose.model("Users", UserScheme);
export default UserModel;