import React,{useEffect, useState} from 'react'
import { useAuth } from '../../Auth/authContext'
import {User} from "../../Interfaces/User"
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { MainContainer } from '../../styled-components/MainContainer'
import NavbarLeft from '../../Components/NavbarLeft/NavbarLeft'
import {ProfilePageContainer, Banner, Name, SaveButton, DetailsContainer, LogOut} from './ProfilePageStyles'
import * as api from "../../api/index"

export default function ProfilePage() {
  const {signOut} = useAuth();
  const navigate = useNavigate();
  const[user, setUser] = useState<User>();
  const {currentUser} = useAuth();
 const signOutHandler  = async () => {
    await signOut()
    navigate("/login")
 }
 useEffect(()=>{
  const getData = async() =>{
    const userT = await api.getUserData(currentUser);
    console.log(userT.data)
    setUser(userT.data);
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
        <img src={user?.banner} alt="banner" />
      </Banner>
      <img alt="profile" src={user?.profileImage}/>
      <Name>{user?.name}</Name>
      <SaveButton>Save</SaveButton>
    <DetailsContainer>
      <div><h3>Name:</h3><input type="text" placeholder={user?.name}/></div>
      <div><h3>Role:</h3><input type="text" placeholder={user?.role}/></div>
    <LogOut onClick={()=>signOutHandler()}>Log Out</LogOut>
    </DetailsContainer>
    </ProfilePageContainer>
    </MainContainer>
    </>
  )
}
