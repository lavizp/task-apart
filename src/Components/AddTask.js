import React, { useState } from 'react'
import styled,{css} from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    ${props=>props.hidden === true && css`
        display: none;
    `}
    ${props=>props.hidden === false && css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
    `}


`

const AddTaskContainer = styled.div`
    padding: 20px;
    background: ${props=> props.theme.backgroundColor};
    border-radius: 5px;
    width: 60%;
    height: 100%;
    position: relative;
    transition: all 1s ease-in-out;
    color: white;
`

const Input = styled.input`
    width: 90%;
    border: none;
    height: ${props=>  props.height? props.height: "30px"};
    background-color: ${props=>props.theme.primaryColor};
    margin-bottom: 10px;
    border-bottom: ${props=> props.title === true? "2px solid grey": "none"};
    color: white;
`

const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
`

export default function AddTask({hidden = false}) {
    const [isHidden, setIsHidden] = useState(hidden);
  return (
    <Overlay hidden={isHidden}>
        <AddTaskContainer>
            <div style={{display: "flex", justifyContent: "space-between", paddingRight: "10px"}}>
                <h1>AddTask:</h1>
                <button onClick={()=>setIsHidden(true)}>X</button>
            </div>
            <InputContainer>
                Title: <Input title = "true"></Input>
                Description: <Input></Input>
                Catogery:<Input></Input>
                State:<Input></Input>
            </InputContainer>

        </AddTaskContainer>
    </Overlay>
  )
}
