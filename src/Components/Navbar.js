import React from 'react'
import {NavContainerLeft , NavContainerTop,NavLogo,TopNavRight} from "../styled-components/Navbar";
import Logo from '../Assets/logo.png'

export default function Navbar() {
  return (
    <>
    <NavContainerTop>
    <NavLogo src = {Logo}/>
      <TopNavRight>asd</TopNavRight>
    </NavContainerTop>
    <NavContainerLeft>
    </NavContainerLeft>
    </>
    
  )
}
