import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './Main'
import { LOCAL_COLORS } from './Colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: LOCAL_COLORS.darkGrey,
    },
    secondary: {
      main: LOCAL_COLORS.darkGreen,
    },
  },
  colors: {
    backgroundLightGrey: LOCAL_COLORS.backgroundLightGrey,
    backgroundWhite: LOCAL_COLORS.backgroundWhite,
    lightGreen: LOCAL_COLORS.lightGreen,
    darkGreen: LOCAL_COLORS.darkGreen,
    mediumGrey: LOCAL_COLORS.mediumGrey,
    darkGrey: LOCAL_COLORS.darkGrey,
    yellow: LOCAL_COLORS.yellow,
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
