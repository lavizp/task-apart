import React from 'react'
import styled from 'styled-components'

const ProfilePageContainer = styled.div`
  height: 100vh;
  width: 100%;
  @media(max-width: 1024px){
      width: 100%;

    }
  img{
    height: 150px;
    width: 150px;
    position: absolute;
    top: 230px;
    left: 100px;
    border: 5px solid ${props=>props.theme.backgroundColor};
    border-radius: 100%;
    @media(max-width: 1024px){
      left: 0px;
      right: 0;
      top: 280px;
      margin-left: auto;
      margin-right: auto; 

    }
  }
`

const Banner = styled.div`
  width: "100%";
  margin: 20px;
  background-color: red;
  height: 200px;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
    object-fit: cover;
  }
`
const Name = styled.h2`
  color: white;
  font-size: 30px;
  position: absolute;
  left: 280px;
  top: 280px;
  text-align: center;
  @media(max-width: 1024px){
      left: 0;
      right: 0;
      top: 430px;
      width: 500px;
      margin-left: auto;
      margin-right: auto; 

    }

`
const DetailsContainer = styled.div`
  position: absolute;
  left: 150px;
  top: 400px;
  input{
    background: none;
    border: 3px solid;
    border-color: ${props=>props.theme.primaryColor};
    border-radius: 8px;
    padding: 10px 20px;
    color: white;
  }

`
export default function ProfilePage() {
  return (
    <>
    <ProfilePageContainer>
      <Banner>
        <img src="https://assets-global.website-files.com/616e938268c8f0a92cb2b540/617806fb52d751a1fab3898a_youtube%20banner%20size%20guide.jpg" alt="banner" />
      </Banner>
      <img alt="profile" src='https://media-exp1.licdn.com/dms/image/C5603AQEyy_F49exDaQ/profile-displayphoto-shrink_800_800/0/1644306645936?e=1674691200&v=beta&t=h00G5kPe50cw3IJnh0rimzYXXoiMHd94jujwlJkuSHE'/>
      <Name>Laviz Pandey</Name>
    </ProfilePageContainer>
    <DetailsContainer>
      <input type="text" placeholder='Laviz Pandey'/>
      <h2>kjasdas</h2>
    </DetailsContainer>
    </>
  )
}
