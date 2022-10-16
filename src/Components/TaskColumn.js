import React from 'react'
import { TaskColumnStyle, TaskTitle} from '../styled-components/Task-Columm'
import {BsPlusCircleFill} from 'react-icons/bs'

export default function TaskColumn({title}) {
  return (
    <TaskColumnStyle>
        <TaskTitle>
            <p>{title}</p>
            <BsPlusCircleFill/>
        </TaskTitle>
    </TaskColumnStyle>
  )
}
