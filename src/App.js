import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuBar from './features/menuBar/MenuBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.backgroundLightGrey,
    minHeight: "100vh"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuBar />
    </div >
  );
}
