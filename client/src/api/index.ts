import axios from "axios";

const url = "http://localhost:500/tasks/"

export const getTasks = ()=>axios.get(url);
export const createTasks = (task: any) => axios.post(url, task)
export const updateTask = (id: string, task: any) => axios.patch(url + id, task)
export const deleteTask = (id: string) => axios.delete(url + id)


