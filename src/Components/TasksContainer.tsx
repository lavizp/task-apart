import React, { useEffect, useState } from 'react'
import { MainContainer } from '../styled-components/MainContainer'
import TaskColumn from './TaskColumn'
import styled from "styled-components";
import db from '../FIrebase/firebase';
import firebase from 'firebase/compat/app';
import { doc, updateDoc } from "firebase/firestore";

import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useAuth } from '../FIrebase/authContext';

import { update_task } from '../Redux/taskSlice';
import { idText } from 'typescript';

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


export default function TasksContainer({displayAddTask, taskdata}: any) {
const{currentUser} = useAuth();
  const [isDragging, setIsDragging] = useState(false);

  const diapatch = useDispatch();

 async function handleOnDragEnd (result: any){
  console.log(result);
    // db.collection("users").doc(currentUser.uid).update({
    //   tasks: firebase.firestore.FieldValue.arrayRemove({
    //     id: result.source.id,
    //     catogery: catogery,
    //     title: title,
    //     description: description,
    //     state: state
    // }),
    // })

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
        <MainContainer gap="30px">
          <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="BackLog" data={taskdata.filter((item: any)=>item.state === "BackLog")}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="To-Do" data={taskdata.filter((item: any)=>item.state === "To-Do")}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="In-Process" data={taskdata.filter((item: any)=>item.state === "In-Process")}/>
            <TaskColumn displayAddTask={displayAddTask} isDragging={isDragging} title="Completed" data={taskdata.filter((item: any)=>item.state === "Completed")}/>
            </DragDropContext>

        </MainContainer>


    </CenterTasksContainer>
  )
}
