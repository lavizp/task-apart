import React from 'react'
import { MainContainer } from '../styled-components/MainContainer'
import TaskColumn from './TaskColumn'
import styled from "styled-components";

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
export default function TasksContainer() {
  return (
    <CenterTasksContainer>
        <h1>Tasks:</h1>
        <MainContainer gap="30px">
            <TaskColumn title="BackLog"/>
            <TaskColumn title="To-Do"/>
            <TaskColumn title="In Process"/>
            <TaskColumn title="Completed"/>
            

        </MainContainer>


    </CenterTasksContainer>
  )
}
