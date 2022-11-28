import React from 'react'
import styled from 'styled-components'

const ProfilePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  @media(max-width: 1024px){
      width: 100%;

    }
  h1{
    position: absolute;
    top: 230px;
    left: 100px;
  }
`

const Banner = styled.div`
  width: "100%";
  margin: 20px;
  background-color: red;
  height: 200px;
  position: relative;
`
export default function ProfilePage() {
  return (
    <ProfilePageContainer>
      <Banner/>
      <h1>asd</h1>
    </ProfilePageContainer>
  )
}
