import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar/Navbar'
import NavbarLeft from '../../Components/NavbarLeft/NavbarLeft'
import { MainContainer } from '../../styled-components/MainContainer'
function HomePage() {
  return (
    <div>
      <Navbar/>
        <MainContainer>
          <NavbarLeft/>
            HomePage
        </MainContainer>
    </div>
  )
}

export default HomePage