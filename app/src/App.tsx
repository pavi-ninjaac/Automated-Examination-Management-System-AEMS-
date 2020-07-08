import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import SignUp from './pages/auth/SignUp';

import './assets/styles/main.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: pink
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
