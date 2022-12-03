import React,{useState, useEffect} from 'react'
import styled from "styled-components";
import {MdOutlineDone} from "react-icons/md"

import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux'
import { remove_task } from '../../Redux/taskSlice'

import db from "../../FIrebase/firebase"
import {useAuth} from "../../FIrebase/authContext"
import firebase from 'firebase/compat/app'
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';

interface Props{
    main?: boolean,
    bg?: string
}
const TaskContainer = styled.div`
    width: 160px;
    min-height: 150px;
    max-height: 300px;
    background-color: ${props=> props.theme.primaryColor};
    margin-top: 30px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 20px;

`

const TaskCatogery = styled.div<Props>`
    height: 22px;
    width: 57px;
    background: ${props=> props.bg};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
        color: white;
        font-weight: 500;
        font-size: 12px;

    }
`

const Title = styled.p<Props>`
    font-weight: 500;
    font-size: ${props=> props.main? "17px": "15px"};
    line-height: 17px;
    color: ${props=> props.main? "white": "#768396"};
    margin: 0;

`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 90px;
    align-items: start;
    justify-content: space-between;
    gap: 10px;
    img{
        width: 100%;
        height: 100px;
        border-radius: 8px;

    }

`

const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        border: 1px solid #2C2D37;
        border-radius: 4px;
        font-size: 12px;
        color: white;
        padding: 5px;
    }
`
const TaskCompleted = styled.div`
    cursor: pointer;
`

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
        await db.collection("users").doc(currentUser.uid.toString()).update({
            tasks: firebase.firestore.FieldValue.arrayRemove({
                id: id,
                catogery: catogery,
                title: title,
                description: description,
                state: state
            }),

        })
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
