import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
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