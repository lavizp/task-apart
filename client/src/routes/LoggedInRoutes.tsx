import { Route,Routes } from 'react-router-dom';
import TaskPage from '../Pages/TaskPage';
import HomePage from '../Pages/HomePage';
import LoginPage from "../Pages/LoginPage"
import SignupPage from "../Pages/SignupPage"
import ProfilePage from '../Pages/ProfilePage';

export default function LoggedInRoutes() {
  return (
    <Routes>
    <Route path ="/login" element={<LoginPage/>}/>
    <Route path ="/signup" element={<SignupPage/>}/>
    <Route path ="/tasks" element={<TaskPage/>}/>
    <Route path ="/" element={<HomePage/>}/>
    <Route path ="/profile" element={<ProfilePage/>}/>
  </Routes>
  )
}
