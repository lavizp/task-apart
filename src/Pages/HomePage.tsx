import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import NavbarLeft from '../Components/NavbarLeft'
import { MainContainer } from '../styled-components/MainContainer'
function HomePage() {
  return (
    <div>
        <Navbar/>
        <MainContainer>
            <NavbarLeft id={0}/>
            HomePage
        </MainContainer>
    </div>
  )
}

export default HomePage