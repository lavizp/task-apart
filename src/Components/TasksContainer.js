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

const taskdata = {
  "BackLog": [
    {
      id: "0",
      catogery: "design",
      title: "Making Stuff",
      description: "Unga Bunga Suii"
    },
  ],
  "To-Do": [
    {
      id: "1",
      catogery: "design",
      title: "Making Stuff",
      description: "Unga Bunga Suii"
    },
    {
      id: "2",
      catogery: "design",
      title: "Making Stuff",
      description: "Unga Bunga Suii"
    },
  ],
  "In-Process": [
    {
      id: "3",
      catogery: "design",
      title: "Making Stuff",
      description: "Unga Bunga Suii"
    },
    {
      id: "4",
      catogery: "design",
      title: "Making Stuff",
      description: "Unga Bunga Suii"
    },
  ],
  "Completed": [
    {
      id: "5",
      catogery: "design",
      title: "Making Stuff",
      description: "Unga Bunga Suii"
    },
  ]

};
export default function TasksContainer() {

  const [taskStateData, setTaskStateData] = useState(taskdata);
  function handleOnDragEnd (result){
    console.log(result);
    const items = taskStateData;
    console.log(items[result.source.droppableId]);

    const [currentData] = items[result.source.droppableId].splice(result.source.index, 1);
    items[result.destination.droppableId].splice(items[result.destination.droppableId.index] , 0,currentData);

    setTaskStateData(items);
  }

  useEffect(()=>{
    console.log(taskStateData);
  },[taskStateData])
  return (
    <CenterTasksContainer>
        <h1>Tasks:</h1>
        <MainContainer gap="30px">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <TaskColumn title="BackLog" data={taskStateData['BackLog']}/>
            <TaskColumn title="To-Do" data={taskStateData['To-Do']}/>
            <TaskColumn title="In-Process" data={taskStateData['In-Process']}/>
            <TaskColumn title="Completed" data={taskStateData['Completed']}/>
            </DragDropContext>

        </MainContainer>


    </CenterTasksContainer>
  )
}
