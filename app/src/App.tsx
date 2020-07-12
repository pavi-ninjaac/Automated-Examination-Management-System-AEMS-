import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import SignIn from './pages/auth/SignIn';

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
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
