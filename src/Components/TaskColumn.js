import React, { useState } from 'react'
import styled from 'styled-components'
import {BsPlusCircleFill} from 'react-icons/bs'
import Task from './Task'
import AddTask from './AddTask'

import { Droppable } from 'react-beautiful-dnd'
const TaskColumnStyle = styled.div`
    width: 230px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    border: ${props=> props.border==="grey"? "1px solid grey":"none"}
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
export default function TaskColumn({title, data, isDragging,displayAddTask}) {
  return (
    <TaskColumnStyle border={isDragging? "grey": "none"}>
        <TaskTitle>
            <p>{title}</p>
            <BsPlusCircleFill onClick={displayAddTask}/>
        </TaskTitle>
        <Droppable droppableId={title}>
            {(provided)=>(
                    <div  {...provided.droppableProps} ref={provided.innerRef}>
                        {data.map((item,index)=>{
                            return(
                                <Task key ={item.id}id={item.id} title={item.title} catogery={item.catogery} description={item.description} image={item.image} index={index}/>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                    )

            }
        </Droppable>
    </TaskColumnStyle>
  )
}
