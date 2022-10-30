import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { add_task } from '../Redux/taskSlice'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    display: flex;
    justify-content: flex-end;


`

const AddTaskContainer = styled.div`
    padding: 20px;
    background: ${props=> props.theme.backgroundColor};
    border-radius: 5px;
    width: 50%;
    height: 100%;
    position: relative;
    transition: all 1s ease-in-out;
    color: white;

    button{
        height: 30px;
    }
`

const Input = styled.input`
    width: 98%;
    border: none;
    line-height: ${props=>  props.height? props.height: "30px"};
    background-color: ${props=>props.theme.primaryColor};
    margin-bottom: 10px;
    color: white;
`
type Props = {
    height?: string,
    title?: boolean,

}
const Select = styled.select<Props>`
    width: 98%;
    border: none;
    height: ${props=>  props.height? props.height: "30px"};
    background-color: ${props=>props.theme.primaryColor};
    margin-bottom: 10px;
    border-bottom: ${props=> props.title === true? "2px solid grey": "none"};
    color: white;
`
const Button = styled.button`
    width: 98%;
    border: none;
    background-color: ${props=>props.theme.primaryColor};
    margin-top: 10px;
    color: white;
    cursor: pointer;
`

const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
`

export default function AddTask({displayAddTask}: any) {
    const titleRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const catogeryRef = useRef<HTMLSelectElement>(null);
    const stateRef = useRef<HTMLSelectElement>(null);

    const dispatch = useDispatch();

    const addTaskData = (e: any)=>{
        e.preventDefault();
        if(catogeryRef.current && titleRef.current && descRef.current && stateRef.current)
        dispatch(add_task(
            {
                id: "9",
                catogery: catogeryRef.current.value,
                title: titleRef.current.value,
                description: descRef.current.value,
                state: stateRef.current.value
            }
        ));
        displayAddTask();
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
                    <option value="Design">Design</option>
                    <option value="In-Process">In-Process</option>
                    <option value="Completed">Completed</option>
                </Select>
                Image: <input title = "true" type="file"></input>

                <Button onClick={(e)=>addTaskData(e)}>Submit</Button>
            </InputContainer>

        </AddTaskContainer>
    </Overlay>
  )
}
