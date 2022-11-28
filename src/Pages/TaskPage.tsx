import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NavbarLeft from '../Components/NavbarLeft'
import Navbar from '../Components/Navbar'
import {MainContainer} from '../styled-components/MainContainer'
import TasksContainer from '../Components/TasksContainer'
import NotesTab from '../Components/NotesTab'
import AddTask from '../Components/AddTask'
import { useAuth } from '../FIrebase/authContext'
import { useNavigate } from 'react-router-dom'
export default function TaskPage() {
  const{currentUser} = useAuth();
  const {tasks} = useSelector((state: any)=> state.taskSlice)
  const navigate = useNavigate();
    const[isAddTaskVisible, setAddTask] = useState(false)
    function displayAddTask(){
      setAddTask(prev =>!prev);
    }

    useEffect(()=>{
      if(!currentUser){
      navigate("/login");
      }
    },[])
  return (
    <>
    {isAddTaskVisible&&<AddTask displayAddTask={displayAddTask}/>}
    <MainContainer >
      {/* <NavbarLeft id={2}/> */}
      <TasksContainer displayAddTask={displayAddTask} taskdata={tasks}/>
      <NotesTab/>
    </MainContainer>
    </>
  )
}
