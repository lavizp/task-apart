import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Title, Container, SubHeading, BodyText } from './HomePageStyles'
import NavbarLeft from '../../Components/NavbarLeft/NavbarLeft'
import { MainContainer } from '../../styled-components/MainContainer'
function HomePage() {
  return (
    <div>
      <Navbar/>
        <MainContainer>
          <NavbarLeft/>
          <Container>
            <Title>Manage your Tasks</Title>
            <SubHeading>Like a Professional</SubHeading>
            <BodyText>Start Dragging and Dropping</BodyText>
          </Container>
        </MainContainer>
    </div>
  )
}

export default HomePage