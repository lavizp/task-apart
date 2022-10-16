import styled from "styled-components";
import React from 'react'

import {CiViewTimeline} from "react-icons/ci"
import {SiHomebridge} from "react-icons/si"
import {AiFillSetting} from "react-icons/ai"
import {TbSubtask} from "react-icons/tb"

const NavContainerLeft = styled.div`
    height: 100vh;
    padding-top: 100px;
    width: 85px;
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



export default function NavbarLeft() {
  return (
    <NavContainerLeft>
        <NavItem>
            <SiHomebridge size={35}/>
        </NavItem>
        <NavItem>
            <CiViewTimeline size={35}/>
        </NavItem>
        <NavItem selected>
            <TbSubtask size={35}/>
        </NavItem>
        <NavItem>
            <AiFillSetting size={35}/>
        </NavItem>

    </NavContainerLeft>
  )
}


