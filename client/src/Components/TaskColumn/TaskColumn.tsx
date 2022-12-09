import React from 'react'
import {BsPlusCircleFill} from 'react-icons/bs'
import Task from '../Task/Task'
import { Droppable } from 'react-beautiful-dnd'

import {TaskColumnStyle, TaskTitle} from './TaskColumnStyles'

export default function TaskColumn({title, data, isDragging,displayAddTask}: any) {
  return (
    <TaskColumnStyle border={isDragging? "grey": "none"}>
        <TaskTitle>
            <p>{title}</p>
            <p><BsPlusCircleFill onClick={displayAddTask}/></p>
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
