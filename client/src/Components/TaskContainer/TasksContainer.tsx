import React, { useState } from 'react'
import TaskColumn from '../TaskColumn/TaskColumn'
import db from '../../Auth/firebase';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../Auth/authContext';

import { update_task } from '../../Redux/taskSlice';
import {CenterTasksContainer, MainContainer} from './TaskContainerStyles'
import * as api from  '../../api/index'
export default function TasksContainer({displayAddTask, taskdata}: any) {
const{currentUser} = useAuth();
  const [isDragging, setIsDragging] = useState(false);
  const diapatch = useDispatch();

 async function handleOnDragEnd (result: any){
  if(!result.destination){
    setIsDragging(false);
    return;
  }
        console.log(result)
        let items = taskdata;
        let updatedItem = items.map(async (task: any)=>{

          if(task._id === result.draggableId){
            let updatedTask =  {...task, state: result.destination.droppableId};
            console.log(updatedTask)
            await api.updateTask(currentUser, updatedTask)
            
            return updatedTask;
          }else{
            return task
          }
        })

    diapatch(update_task(result));
    setIsDragging(false);

  }
  function handleOnDragStart()
  {
    setIsDragging(true);
  }

  return (
    <CenterTasksContainer>
        <h1>Tasks:</h1>
        <MainContainer>
          <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="BackLog" data={taskdata?.filter((item: any)=>item.state === "BackLog")}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="To-Do" data={taskdata?.filter((item: any)=>item.state === "To-Do")}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="In-Process" data={taskdata?.filter((item: any)=>item.state === "In-Process")}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="Completed" data={taskdata?.filter((item: any)=>item.state === "Completed")}/>
            </DragDropContext>
        </MainContainer>
    </CenterTasksContainer>
  )
}
