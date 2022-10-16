import './app.css'
import { ThemeProvider } from "styled-components";
import TasksContainer from './Components/TasksContainer';
import NavbarLeft from './Components/NavbarLeft';
import { MainContainer } from './styled-components/MainContainer';
import Navbar from './Components/Navbar';
function App() {

  const theme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
  return (

<ThemeProvider theme={theme}>
  <Navbar/>
  <MainContainer>
    <NavbarLeft/>
    <TasksContainer/>
  </MainContainer>
  </ThemeProvider>
  );
}

export default App;
