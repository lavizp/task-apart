import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NavbarLeft from '../Components/NavbarLeft/NavbarLeft'
import Navbar from '../Components/Navbar/Navbar'
import {MainContainer} from '../styled-components/MainContainer'
import TasksContainer from '../Components/TaskContainer/TasksContainer'
import NotesTab from '../Components/NotesTab/NotesTab'
import AddTask from '../Components/AddTask/AddTask'
import { useAuth } from '../FIrebase/authContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { init_data } from '../Redux/taskSlice'
import * as api from '../api/index'
export default function TaskPage() {
  const dispatch = useDispatch();
  const{currentUser} = useAuth();
  const {tasks} = useSelector((state: any)=> state.taskSlice)
  const navigate = useNavigate();
    const[isAddTaskVisible, setAddTask] = useState(false)
    useEffect(()=>{
      const dataFetch = async(userID: string)=>{
        if(!currentUser) return
        let {data} = await api.getTasks(currentUser)
        dispatch(init_data(
            data
          )
        )
      }
      if(currentUser){
        dataFetch(currentUser);
      }
    },[])
    function displayAddTask(){
      setAddTask(prev =>!prev);
    }
  return (
    <>
    {isAddTaskVisible&&<AddTask displayAddTask={displayAddTask}/>}
    <Navbar/>
    <MainContainer >
      <NavbarLeft/>
      <TasksContainer displayAddTask={displayAddTask} taskdata={tasks}/>
      <NotesTab/>
    </MainContainer>
    </>
  )
}
