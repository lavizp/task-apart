import React,{useState, useEffect} from 'react'
import {MdOutlineDone} from "react-icons/md"

import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux'
import { remove_task } from '../../Redux/taskSlice'

import db from "../../FIrebase/firebase"
import {useAuth} from "../../FIrebase/authContext"
import firebase from 'firebase/compat/app'
import * as api from '../../api/index'
import {Title, TitleContainer,TaskCatogery, TaskCompleted, TaskContainer, DetailsContainer} from './TaskStyles'
interface catogeries{
    [key: string]: string | string
}
const catMap: catogeries = {
    Research: "#5051F9",
    Code: "#F59E0B",
    Other: "#E97342",
    College: "#1EA7FF"
}

export default function Task({id,image, title, description,catogery, state}: any) {
    const {currentUser} = useAuth();
    const dispatch = useDispatch();
    const [catVal, setCatVal] = useState<string>(catogery);

    const removeTask = async()=>{
        await api.deleteTask( currentUser ,id);

        dispatch(remove_task({
            id: id
        }))
    }
  return (
    <Draggable key={id} draggableId={id.toString()} index={parseInt(id)}>
        {(provided)=>(
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >

        <TaskContainer >
        <TitleContainer>
       {
        <TaskCatogery bg={catMap[catVal]}>
            <p>{catogery}</p>
        </TaskCatogery>
        }
        {image &&  <img src = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="yahoo"></img>}

        <Title main>{title}</Title>
        <Title>{description}</Title>
        </TitleContainer>
        <DetailsContainer>
            <p>Aug 20, 2021</p>
            <TaskCompleted>
                <MdOutlineDone size={20} color="#768396" onClick={removeTask}/>
            </TaskCompleted>
        </DetailsContainer>

        </TaskContainer>
        </div>
        )}
    </Draggable>
  )
}
