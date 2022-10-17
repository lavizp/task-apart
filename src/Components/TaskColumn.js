import React from 'react'
import { TaskColumnStyle, TaskTitle} from '../styled-components/Task-Columm'
import {BsPlusCircleFill} from 'react-icons/bs'
import Task from './Task'

export default function TaskColumn({title}) {
  return (
    <TaskColumnStyle>
        <TaskTitle>
            <p>{title}</p>
            <BsPlusCircleFill/>
        </TaskTitle>
        <Task image={"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"}/>
        <Task/>

    </TaskColumnStyle>
  )
}
