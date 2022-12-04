import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useAuth } from '../FIrebase/authContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { MainContainer } from '../styled-components/MainContainer'
import NavbarLeft from '../Components/NavbarLeft/NavbarLeft'
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
  button{
    width: 100px;
    height:30px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    position: absolute;
    background-color: #5051F9;
    border: none;
    border-radius: 7px;
    right: 100px;
    top: 310px;
    text-align: center;
    @media(max-width: 1024px){
        right: 20px;
        bottom: 0px;
        width: 150px;

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
const LogOut = styled.button`
  width: 100px;
    height:30px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    position: absolute;
    background-color: #5051F9;
    border: none;
    border-radius: 7px;
    left: 150px;
    top: 550px;
    @media(max-width: 1024px){
        right: 20px;
        bottom: 0px;
        width: 150px;

      }
`
const DetailsContainer = styled.div`
  display: flex;
  gap: 200px;
  position: absolute;
  left: 150px;
  top: 400px;
  @media(max-width: 1024px){
      left: 0;
      right: 0;
      top: 490px;
      margin-left: auto;
      margin-right: auto; 

    }
  input{
    background: none;
    border: 3px solid;
    border-color: ${props=>props.theme.primaryColor};
    border-radius: 8px;
    width: 100%;
    padding: 10px 20px;
    color: white;
  }
  h3{
    color: white;
  }

`
export default function ProfilePage() {
  const {signOut} = useAuth();
  const navigate = useNavigate();
  const {currentUser} = useAuth();
  useEffect(()=>{
    if(!currentUser){
    navigate("/login");
    }
  },[])
  return (
    <>
    <Navbar/>
    <MainContainer>
    <NavbarLeft/>
    <ProfilePageContainer>
      <Banner>
        <img src="https://assets-global.website-files.com/616e938268c8f0a92cb2b540/617806fb52d751a1fab3898a_youtube%20banner%20size%20guide.jpg" alt="banner" />
      </Banner>
      <img alt="profile" src='https://media-exp1.licdn.com/dms/image/C5603AQEyy_F49exDaQ/profile-displayphoto-shrink_800_800/0/1644306645936?e=1674691200&v=beta&t=h00G5kPe50cw3IJnh0rimzYXXoiMHd94jujwlJkuSHE'/>
      <Name>Laviz Pandey</Name>
      <button>Save</button>
    </ProfilePageContainer>
    <DetailsContainer>
      <div><h3>Name:</h3><input type="text" placeholder='Laviz Pandey'/></div>
      <div><h3>Role:</h3><input type="text" placeholder='Front-End-Developer'/></div>
    </DetailsContainer>
    <LogOut onClick={()=>signOut()}>Log Out</LogOut>
    </MainContainer>
    </>
  )
}
