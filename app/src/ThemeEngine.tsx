import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import AppController from './Router';
import './assets/css/main.min.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: pink
  }
});

export default function ThemeEngine() {
  return (
    <ThemeProvider theme={theme}>
      <AppController />
    </ThemeProvider>
  );
}
