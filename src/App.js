import './app.css'
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import TaskPage from './Pages/TaskPage';
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage"
function App() {


  const theme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }

  return (

<ThemeProvider theme={theme}>
  <Routes>
    <Route path ="/login" element={<LoginPage/>}/>
    <Route path ="/signup" element={<SignupPage/>}/>
    <Route path ="/" element={<TaskPage/>}/>

  </Routes>
  </ThemeProvider>
  );
}

export default App;
