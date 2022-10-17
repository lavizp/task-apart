import './app.css'
import { ThemeProvider } from "styled-components";
import TasksContainer from './Components/TasksContainer';
import NavbarLeft from './Components/NavbarLeft';
import { MainContainer } from './styled-components/MainContainer';
import Navbar from './Components/Navbar';
import NotesTab from './Components/NotesTab';
function App() {

  const theme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
  return (

<ThemeProvider theme={theme}>
  <Navbar/>
  <MainContainer>
    <NavbarLeft id={2}/>
    <TasksContainer/>
    <NotesTab/>
  </MainContainer>
  </ThemeProvider>
  );
}

export default App;
