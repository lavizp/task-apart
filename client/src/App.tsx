import './app.css'
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { useAuth } from './FIrebase/authContext';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { init_data } from './Redux/taskSlice';
import LoggedInRoutes from './routes/LoggedInRoutes';
import SignedOutRoutes from './routes/SignedOutRoutes';

import * as api from './api/index'
function App() {
  const dispatch = useDispatch();

  const {currentUser} = useAuth();
  const theme: DefaultTheme = {
    primaryColor: "#1E1F25",
    backgroundColor: "#131517"
  }
  useEffect(()=>{
    const dataFetch = async(userID: string)=>{
      let {data} = await api.getTasks()
      dispatch(init_data(
          data
        )
      )
    }
    if(currentUser){
      dataFetch(currentUser.uid);
    }
  },[currentUser])
  return (

<ThemeProvider theme={theme}>
    {currentUser?<LoggedInRoutes/> : <SignedOutRoutes/>}

  </ThemeProvider>
  );
}

export default App;
