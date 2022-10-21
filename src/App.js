import './app.css'
import { ThemeProvider } from "styled-components";
import TasksContainer from './Components/TasksContainer';
import NavbarLeft from './Components/NavbarLeft';
import { MainContainer } from './styled-components/MainContainer';
import Navbar from './Components/Navbar';
import NotesTab from './Components/NotesTab';
import AddTask from './Components/AddTask';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const {tasks} = useSelector((state)=> state.taskSlice)
  useEffect(()=>{
    console.log(tasks);
  },[])

  const theme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
  const[isAddTaskVisible, setAddTask] = useState(false);
  function displayAddTask(){
    setAddTask(prev =>!prev);
  }
  return (

<ThemeProvider theme={theme}>
  <Navbar/>
  {isAddTaskVisible&&<AddTask displayAddTask={displayAddTask}/>}
  <MainContainer>
    <NavbarLeft id={2}/>
    <TasksContainer displayAddTask={displayAddTask}/>
    <NotesTab/>
  </MainContainer>
  </ThemeProvider>
  );
}

export default App;
