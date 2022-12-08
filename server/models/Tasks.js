import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    descrption: {
        type: String,
        require: true
    },
    catogery: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    image: String,
})

let TasksModel = mongoose.model("Tasks", TaskSchema);
export default TasksModel;