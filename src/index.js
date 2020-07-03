import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { LOCAL_COLORS } from './colors'
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
