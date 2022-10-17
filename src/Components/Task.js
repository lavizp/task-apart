import React from 'react'
import styled from "styled-components";
import {MdOutlineDone} from "react-icons/md"

const TaskContainer = styled.div`
    width: 180px;
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

const TaskCatogery = styled.div`
    height: 22px;
    width: 57px;
    background-color: red;
    background: #5051F9;
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

const Title = styled.p`
    font-weight: 500;
    font-size: ${props=> props.main? "17px": "15px"};
    line-height: 17px;
    color: ${props=> props.main? "white": "##768396"};
    margin: 0;

`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90px;
    align-items: start;
    justify-content: space-between;


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


export default function Task() {
  return (
    <TaskContainer>
        <TitleContainer>

        <TaskCatogery>
            <p>Design</p>
        </TaskCatogery>
        <Title main>Making Design</Title>
        <Title>Create Website for Me</Title>
        </TitleContainer>
        <DetailsContainer>
            <p>Aug 20, 2021</p>
            <MdOutlineDone size={20} color="#768396"/>
        </DetailsContainer>

    </TaskContainer>
  )
}
