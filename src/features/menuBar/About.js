import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moores from './moores-18.jpg';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.colors.backgroundWhite,
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
}));

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Typography className={classes.title}>
                    Moore On Tech
                </Typography>
                <img src={moores} className={classes.mainImg} />
            </Paper>
        </div>
    );
}