import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moores from './moores-18.jpg';
import Post from './features/post/Post';
import MenuBar from './features/menuBar/MenuBar';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "#F5F5F5",
    color: "#FFBF46"
  },
  mainImg: {
    width: "60%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuBar />
      <header className="App-header">
        <img src={moores} className={classes.mainImg} />
        <Post />
      </header>
    </div >
  );
}

export default App;
