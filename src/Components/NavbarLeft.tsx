import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import {SiHomebridge} from "react-icons/si"
import {AiFillSetting} from "react-icons/ai"
import {TbSubtask} from "react-icons/tb"
import { useNavigate } from "react-router-dom";
interface Props{
    selected?: string
}

const NavContainerLeft = styled.div`
    height: "100%";
    padding-top: 100px;
    width: 5%;
    background-color: ${props=>props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:flex-start;
    @media(max-width: 1024px){
        padding-top: 0px;
        height: 70px;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;

    }


`

const NavItem = styled.div<Props>`
    height: 50px;
    width: 50px;
    background-color: ${props=> props.selected === "selected"? "#5051F9": ""};
    color: ${props=> props.selected === "selected"? "white": "#5F6388"};
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-bottom: 20px;
    @media(max-width: 1024px){
        height: 50px;
        margin-top: 0px;
        margin-bottom: 0px;

        

    }
`



export default function NavbarLeft() {
    const [isSelected, setSelected] = useState([false, false, false ,false]);
    const navigate = useNavigate();
    useEffect(()=>{
        let link = (window.location.pathname);
        switch(link){
            case "/":
                setActive(0);
                break;
            case "/tasks":
                setActive(2);
                break;
            case "/profile":
                setActive(3);
                break;
        }
    },[])
    const setActive=(id:number)=>{
        let newSelected = [false, false, false ,false];
        newSelected[id] = true;
        setSelected(newSelected);
    }
    const navigateToPage=(page: string)=>{
        switch(page){
            case "":
                setActive(0);
                break;
            case "tasks":
                setActive(2);
                break;
            case "profile":
                setActive(3);
                break;
            

        }
        navigate(`/${page}`)
    }
  return (
    <NavContainerLeft>
        <NavItem selected={isSelected[0]? "selected":""} onClick={()=>navigateToPage("")}>
            <SiHomebridge size={32}/>
        </NavItem>
        <NavItem selected={isSelected[1]? "selected":""}  onClick={()=>navigateToPage("")}> 
            <SiHomebridge size={32}/>
        </NavItem>
        <NavItem selected={isSelected[2]? "selected":""} onClick={()=>navigateToPage("tasks")}>
            <TbSubtask size={32}/>
        </NavItem>
        <NavItem selected={isSelected[3]? "selected":""} onClick={()=>navigateToPage("profile")}>
            <AiFillSetting size={32}/>
        </NavItem>

    </NavContainerLeft>
  )
}


