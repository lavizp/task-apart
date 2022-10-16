import './app.css'
import { ThemeProvider } from "styled-components";
import Navbar from './Components/Navbar';
function App() {

  const theme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
  return (

<ThemeProvider theme={theme}>
<Navbar/>


  </ThemeProvider>
  );
}

export default App;
