import React,{useEffect, useState,useRef} from 'react'
import { useAuth } from '../../Auth/authContext'
import {User} from "../../Interfaces/User"
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { MainContainer } from '../../styled-components/MainContainer'
import NavbarLeft from '../../Components/NavbarLeft/NavbarLeft'
import {ProfilePageContainer, Banner, Name, SaveButton, DetailsContainer, LogOut} from './ProfilePageStyles'
import * as api from "../../api/index"

export default function ProfilePage() {

  const nameRef = useRef<HTMLInputElement>(null)
  const roleRef = useRef<HTMLInputElement>(null)


  const {signOut} = useAuth();
  const navigate = useNavigate();
  const[user, setUser] = useState<User>();
  const {currentUser} = useAuth();
 const signOutHandler  = async () => {
    await signOut()
    navigate("/login")
 }
 const saveButtonHander = async() => {
    if(!nameRef.current?.value.length && !nameRef.current?.value.length){
      return;
    }
    if(user?.name !== nameRef.current?.value){
        await api.changeName(nameRef.current?.value || "")

    }
    if(user?.role !== roleRef.current?.value){
      await api.changeName(roleRef.current?.value || "")
  }
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
      <SaveButton onClick={()=> saveButtonHander()}>Save</SaveButton>
    <DetailsContainer>
      <div><h3>Name:</h3><input type="text" placeholder={user?.name} ref={nameRef}/></div>
      <div><h3>Role:</h3><input type="text" placeholder={user?.role} ref = {roleRef}/></div>
    <LogOut onClick={()=>signOutHandler()}>Log Out</LogOut>
    </DetailsContainer>
    </ProfilePageContainer>
    </MainContainer>
    </>
  )
}
