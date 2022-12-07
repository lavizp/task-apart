import styled from 'styled-components'

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
export {Overlay,InputContainer, Button, Select, Input, AddTaskContainer}