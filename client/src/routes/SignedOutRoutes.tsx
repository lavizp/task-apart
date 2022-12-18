import { Route,Routes } from 'react-router-dom';

import LoginPage from "../Pages/LoginPage"
import SignupPage from "../Pages/SignupPage"
export default function SignedOutRoutes() {
  return (
    <Routes>
    <Route path ="/" element={<LoginPage/>}/>
    <Route path ="/signup" element={<SignupPage/>}/>
  </Routes>
  )
}
