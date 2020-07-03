import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moores from './moores-18.jpg';
import Post from './features/post/Post';
import MenuBar from './features/menuBar/MenuBar';
import Typography from '@material-ui/core/Typography';
import './App.css';

const useStyles = makeStyles(theme => {
    console.log(theme);
    console.log("here")
    return {
        root: {
            backgroundColor: theme.colors.backgroundLightGrey,
            minHeight: "100vh"
        },
        title: {
            textAlign: "center",
            fontSize: "78px",
            color: theme.darkGrey,
        },
        mainImg: {
            margin: 40,
            width: "30%",
        },
    }
});


export default function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MenuBar />
            <header className="App-header">
                <Typography className={classes.title}>
                    Moore On Tech
          </Typography>
                <img src={moores} className={classes.mainImg} />
            </header>
            <Post />
        </div >
    );
}
