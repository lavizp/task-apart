import React, { useEffect, useState } from 'react'
import { MainContainer } from '../styled-components/MainContainer'
import TaskColumn from './TaskColumn'
import styled from "styled-components";

import { DragDropContext } from 'react-beautiful-dnd';

const CenterTasksContainer = styled.div`
    width: 70%;
    height: "100%";
    padding-left: 20px;
    background-color: ${props=> props.theme.backgroundColor};

    h1{
        color: white;
        font-size: 40px;
    }

`


export default function TasksContainer({displayAddTask, taskdata}) {

  const [taskStateData, setTaskStateData] = useState(taskdata);
  const [isDragging, setIsDragging] = useState(false);
  function handleOnDragEnd (result){
    if(!result.destination) return;
    let items = taskStateData;

    let [currentData] = items[result.source.droppableId].splice(result.source.index, 1);
    items[result.destination.droppableId].splice(result.destination.index , 0, currentData);

    setTaskStateData(items);
    setIsDragging(false);

  }
  function handleOnDragStart()
  {
    setIsDragging(true);
  }

  return (
    <CenterTasksContainer>
        <h1>Tasks:</h1>
        <MainContainer gap="30px">
          <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="BackLog" data={taskStateData['BackLog']}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="To-Do" data={taskStateData['To-Do']}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="In-Process" data={taskStateData['In-Process']}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="Completed" data={taskStateData['Completed']}/>
            </DragDropContext>

        </MainContainer>


    </CenterTasksContainer>
  )
}
