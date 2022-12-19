import {Task} from "./Task"

export interface User {
    _id: string,
    name: string,
    email: string,
    userName: string,
    password: string,
    role: string,
    profileImage: string,
    banner: string,
    tasks: [Task]
  }