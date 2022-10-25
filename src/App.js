import './app.css'
import { ThemeProvider } from "styled-components";
import { useState } from 'react';
import TaskPage from './Pages/TaskPage';
import { useSelector } from 'react-redux';
function App() {
  const {tasks} = useSelector((state)=> state.taskSlice)


  const theme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }

  return (

<ThemeProvider theme={theme}>
    <TaskPage />
  </ThemeProvider>
  );
}

export default App;
