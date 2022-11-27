import React from 'react'
import styled from 'styled-components'
import {BsPlusCircleFill} from 'react-icons/bs'
import Task from './Task'

import { Droppable } from 'react-beautiful-dnd'

interface Props{
    border?: string,
}
const TaskColumnStyle = styled.div<Props>`
    width: 230px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    border: ${props=> props.border==="grey"? "1px solid grey":"none"}
`

const TaskTitle = styled.div`
    width: "100%";
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
export default function TaskColumn({title, data, isDragging,displayAddTask}: any) {
  return (
    <TaskColumnStyle border={isDragging? "grey": "none"}>
        <TaskTitle>
            <p>{title}</p>
            <BsPlusCircleFill onClick={displayAddTask}/>
        </TaskTitle>
        <Droppable droppableId={title}>
            {(provided)=>(
                    <div  {...provided.droppableProps} ref={provided.innerRef} style={{width: "100%", height: "100%"}}>
                        {data?.map((item: any)=>{
                            return(
                                <Task key ={item.id} id={item.id} title={item.title} catogery={item.catogery} description={item.description} image={item.image} state={title}/>
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
