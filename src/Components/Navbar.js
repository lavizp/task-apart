import React from 'react'
import {NavContainerTop,NavLogo,TopNavRight} from "../styled-components/Navbar";
import Logo from '../Assets/logo.png'

import {MdKeyboardArrowDown} from 'react-icons/md'

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
