import React,{useEffect, useState} from 'react'
import { useAuth } from '../../Auth/authContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { MainContainer } from '../../styled-components/MainContainer'
import NavbarLeft from '../../Components/NavbarLeft/NavbarLeft'
import {ProfilePageContainer, Banner, Name, SaveButton, DetailsContainer, LogOut} from './ProfilePageStyles'
export default function ProfilePage() {
  const {signOut, getUser} = useAuth();
  const navigate = useNavigate();
  const[user, setUser] = useState(null);
  const {currentUser} = useAuth();
 const signOutHandler  = async () => {
    await signOut()
    navigate("/login")
 }
 useEffect(()=>{
  const getData = async() =>{

    const userT =await getUser(currentUser);
    setUser(userT);
  }
  getData();
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
      <SaveButton>Save</SaveButton>
    <DetailsContainer>
      <div><h3>Name:</h3><input type="text" placeholder='Laviz Pandey'/></div>
      <div><h3>Role:</h3><input type="text" placeholder='Front-End-Developer'/></div>
    <LogOut onClick={()=>signOutHandler()}>Log Out</LogOut>
    </DetailsContainer>
    </ProfilePageContainer>
    </MainContainer>
    </>
  )
}
