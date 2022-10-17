import React from 'react'
import styled from 'styled-components'
import {BsPlusCircleFill} from 'react-icons/bs'
import Task from './Task'


const TaskColumnStyle = styled.div`
    width: 190px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    


`

const TaskTitle = styled.div`
    width: 160px;
    height: 54px;
    border-radius: 10px;
    background-color: ${props=> props.theme.primaryColor};
    display: flex;
    align-items: center;
    padding:0 20px;
    justify-content: space-between;
    color: white;

    p{
        font-size: 20px;
    }

`
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
