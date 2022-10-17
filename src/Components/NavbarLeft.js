import styled from "styled-components";
import React, { useEffect, useState } from 'react'

import {CiViewTimeline} from "react-icons/ci"
import {SiHomebridge} from "react-icons/si"
import {AiFillSetting} from "react-icons/ai"
import {TbSubtask} from "react-icons/tb"

const NavContainerLeft = styled.div`
    height: 100vh;
    padding-top: 100px;
    width: 5%;
    background-color: ${props=>props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:flex-start;
    margin:0;


`

const NavItem = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${props=> props.selected? "#5051F9": ""};
    color: ${props=> props.selected? "white": "#5F6388"};
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-bottom: 20px;
`



export default function NavbarLeft({id}) {
    const [isSelected, setSelected] = useState([false, false, false ,false]);


    const resetAll=()=>{
        let newSelected = [false,false,false,false];
        newSelected[id] = true;
        setSelected(newSelected);
    }
    useEffect(()=>{
        resetAll();
    },[])
  return (
    <NavContainerLeft>
        <NavItem onClick selected={isSelected[0] && "selected"}>
            <SiHomebridge size={32}/>
        </NavItem>
        <NavItem onClick selected={isSelected[1] && "selected"}>
            <CiViewTimeline size={32}/>
        </NavItem>
        <NavItem onClick selected={isSelected[2] && "selected"}>
            <TbSubtask size={32}/>
        </NavItem>
        <NavItem onClick selected={isSelected[3] && "selected"}>
            <AiFillSetting size={32}/>
        </NavItem>

    </NavContainerLeft>
  )
}


