import React from 'react'
import styled from 'styled-components'
import {BsPlusCircleFill} from 'react-icons/bs'
import Task from './Task'

import { Droppable } from 'react-beautiful-dnd'
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
export default function TaskColumn({title, data}) {
  return (
    <TaskColumnStyle>
        <TaskTitle>
            <p>{title}</p>
            <BsPlusCircleFill/>
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
