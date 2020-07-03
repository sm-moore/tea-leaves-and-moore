import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh"
    },
    title: {
        marginLeft: theme.spacing(2),
        fontSize: "60px",
        color: theme.colors.darkGrey,
    },
    paper: {
        backgroundColor: theme.colors.backgroundWhite,
        maxWidth: "900px",
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    mainImg: {
        width: "95%",
        display: 'block',
        padding: theme.spacing(2),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    content: {
        color: theme.colors.darkGreen,
        fontSize: "24px",
        margin: 0,
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    date: {
        color: theme.colors.darkGreen,
        fontSize: "12px",
        textAlign: 'right',
        paddingRight: theme.spacing(1),
        paddingBottom: '5px',
    },
}));

export default function Page({ title, content, date, imgSrc }) {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.paper}>
            <img src={imgSrc} className={classes.mainImg} />
            <Typography className={classes.title}>
                {title}
            </Typography>
            <p className={classes.content}>
                {content}
            </p>
            <p className={classes.date}>
                {date}
            </p>
        </Paper>
    );
}