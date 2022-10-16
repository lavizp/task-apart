import React from 'react'
import Logo from '../Assets/logo.png'
import styled from "styled-components";

import {MdKeyboardArrowDown} from 'react-icons/md'
const NavContainerTop = styled.div`
    padding-left:15px;
    padding-right: 30px;
    width: "100%";
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props=>props.theme.primaryColor};


`

const NavLogo = styled.img`
    height: 75%;
`

const TopNavRight = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        object-fit: cover;
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
`
export default function Navbar() {
  return (
    <>
    <NavContainerTop>
    <NavLogo src = {Logo}/>
      <TopNavRight>
        <img src="https://images.unsplash.com/photo-1603383928972-2116518cd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt='profile'></img>
        <MdKeyboardArrowDown size={30}/>
      </TopNavRight>
    </NavContainerTop>

    </>
    
  )
}
