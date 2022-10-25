import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavbarLeft from '../Components/NavbarLeft'
import Navbar from '../Components/Navbar'
import {MainContainer} from '../styled-components/MainContainer'
import TasksContainer from '../Components/TasksContainer'
import NotesTab from '../Components/NotesTab'
import AddTask from '../Components/AddTask'
export default function TaskPage() {
  const {tasks} = useSelector((state)=> state.taskSlice)

    const[isAddTaskVisible, setAddTask] = useState(false)
    function displayAddTask(){
      setAddTask(prev =>!prev);
    }
  return (
    <>
    <Navbar/>
    {isAddTaskVisible&&<AddTask displayAddTask={displayAddTask}/>}
    <MainContainer>
      <NavbarLeft id={2}/>
      <TasksContainer displayAddTask={displayAddTask} taskdata={tasks}/>
      <NotesTab/>
    </MainContainer>
    </>
  )
}
