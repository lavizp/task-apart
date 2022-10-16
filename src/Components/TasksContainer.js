import React from 'react'
import { CenterTasksContainer } from '../styled-components/CenterTaskContainer'
import { MainContainer } from '../styled-components/MainContainer'
import TaskColumn from './TaskColumn'
export default function TasksContainer() {
  return (
    <CenterTasksContainer>
        <h1>Tasks:</h1>
        <MainContainer gap>
            <TaskColumn title="BackLog"/>
            <TaskColumn title="To-Do"/>
            <TaskColumn title="Process"/>
            <TaskColumn title="Completed"/>
            

        </MainContainer>


    </CenterTasksContainer>
  )
}
