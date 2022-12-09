import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { add_task } from '../../Redux/taskSlice'
import { useAuth } from '../../FIrebase/authContext'
import db from '../../FIrebase/firebase'
import firebase from 'firebase/compat/app'
import {Overlay,InputContainer, Button, Select, Input, AddTaskContainer} from './AddTaskStyles'
import * as api from '../../api/index'

export default function AddTask({displayAddTask}: any) {

    const {currentUser} = useAuth();
    const titleRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const catogeryRef = useRef<HTMLSelectElement>(null);
    const stateRef = useRef<HTMLSelectElement>(null);

    const dispatch = useDispatch();

    const addTaskData = async(e: any)=>{
        e.preventDefault();
        
        if(catogeryRef.current && titleRef.current && descRef.current && stateRef.current){
            var task = {
                id: Date.now(),
                title: titleRef.current.value,
                description: descRef.current.value,
                catogery: catogeryRef.current.value,
                state: stateRef.current.value
            }
            console.log(task)
            const {data} = await api.createTasks(
                {
                    id: Date.now(),
                    title: titleRef.current.value,
                    description: descRef.current.value,
                    catogery: catogeryRef.current.value,
                    state: stateRef.current.value
                }
            )
            
            dispatch(add_task(
                task
                ));
                displayAddTask();
        }
    }
    

  return (
    <Overlay>
        <AddTaskContainer>
            <div style={{display: "flex", justifyContent: "space-between",alignItems:"center", paddingRight: "10px"}}>
                <h1>AddTask:</h1>
                <button onClick={displayAddTask}>X</button>
            </div>
            <InputContainer>
                Title: <Input ref={titleRef} required></Input>
                Description: <Input height={"100px"} ref={descRef} required></Input>
                State:
                <Select ref={stateRef}>
                    <option value="BackLog" >BackLog</option>
                    <option value="To-Do" >To-Do</option>
                    <option value="In-Process" >In-Process</option>
                    <option value="Completed" >Completed</option>
                </Select>
                Catogery:<Select ref={catogeryRef}>
                    <option value="Research">Research</option>
                    <option value="Code">Code</option>
                    <option value="College">College</option>
                    <option value="Other">Other</option>
                </Select>
                Image: <input title = "true" type="file"></input>

                <Button onClick={(e)=>addTaskData(e)}>Submit</Button>
            </InputContainer>

        </AddTaskContainer>
    </Overlay>
  )
}
