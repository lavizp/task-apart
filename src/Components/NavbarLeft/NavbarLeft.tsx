import React, { useEffect, useState } from 'react'
import {SiHomebridge} from "react-icons/si"
import {AiFillSetting} from "react-icons/ai"
import {TbSubtask} from "react-icons/tb"
import { useNavigate } from "react-router-dom";
import {NavContainerLeft, NavItem} from './NavbarLeftStyle'

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


