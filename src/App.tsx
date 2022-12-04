import './app.css'
import { Navigate, Route,Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import TaskPage from './Pages/TaskPage';
import HomePage from './Pages/HomePage';
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage"
import { useAuth } from './FIrebase/authContext';
import React, { useEffect } from 'react';
import getUserData from './Services/getUserData';
import { useDispatch } from 'react-redux';
import { init_data } from './Redux/taskSlice';
import Navbar from './Components/Navbar/Navbar';
import { MainContainer } from './styled-components/MainContainer';
import NavbarLeft from './Components/NavbarLeft/NavbarLeft';
import ProfilePage from './Pages/ProfilePage';
import { useNavigate } from 'react-router-dom';
function App() {
  const dispatch = useDispatch();

  const {currentUser} = useAuth();
  const theme: DefaultTheme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
  const navigate = useNavigate();
  useEffect(()=>{
    const dataFetch = async(userID: string)=>{
      let userData: any = await getUserData(userID);
      console.log(userData.data().tasks);
      dispatch(init_data(
        userData.data().tasks
      ))
    }
    if(currentUser){
      dataFetch(currentUser.uid);
    }
  },[])
  return (

<ThemeProvider theme={theme}>

  <Routes>
    <Route path ="/login" element={<LoginPage/>}/>
    <Route path ="/signup" element={<SignupPage/>}/>
    <Route path ="/tasks" element={<TaskPage/>}/>
    <Route path ="/" element={<HomePage/>}/>
    <Route path ="/profile" element={<ProfilePage/>}/>
  </Routes>
  </ThemeProvider>
  );
}

export default App;
