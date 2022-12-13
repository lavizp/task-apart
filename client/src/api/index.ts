import axios from "axios";

const url = "http://localhost:500/tasks/"

export const getTasks = (id: string)=>axios.get(url + id);
export const createTasks = (id: string, task: any) => axios.post(url + id, task)
export const updateTask = (id: string, task: any) => axios.patch(url + id, task)
export const deleteTask = (id: string, taskID: any) => axios.delete(url + id, taskID)


