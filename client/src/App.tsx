import './app.css'
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { useAuth } from './FIrebase/authContext';
import { useEffect } from 'react';
import { init_data } from './Redux/taskSlice';
import LoggedInRoutes from './routes/LoggedInRoutes';
import SignedOutRoutes from './routes/SignedOutRoutes';

import * as api from './api/index'
function App() {

  const {currentUser} = useAuth();
  const theme: DefaultTheme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
 
  return (

<ThemeProvider theme={theme}>
    {currentUser?<LoggedInRoutes/> : <SignedOutRoutes/>}

  </ThemeProvider>
  );
}

export default App;
