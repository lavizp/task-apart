import axios from "axios";

const taskUrl = "http://localhost:500/tasks/"
const userUrl = "http://localhost:500/users/"


export const getTasks = (id: string)=>axios.get(taskUrl + id);
export const createTasks = (id: string, task: any) => axios.post(taskUrl + id, task)
export const updateTask = (id: string, task: any) => axios.patch(taskUrl + id, task)
export const deleteTask = (id: string, taskID: any) => axios.delete(taskUrl + id, {data:{_id: taskID}})
export const getUserData = (id: string)=>axios.get(userUrl + id);
export const login = (userData: any) => axios.post(userUrl + "login", userData)
export const signUp = (userData: any) => axios.post(userUrl + "signup", userData)

export const changeName = (name: string) => axios.put(userUrl + "changeName", name)
export const changeRole = (role: string) => axios.put(userUrl + "changeName", role)


