import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        marginLeft: theme.spacing(2),
        fontSize: "30px",
        color: theme.colors.darkGrey,
    },
    paper: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundWhite,
        maxWidth: "900px",
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    mainImg: {
        width: "100%",
        maxWidth: "200px",
        padding: theme.spacing(1),
    },
    summary: {
        color: theme.colors.darkGreen,
        fontSize: "14px",
        margin: 0,
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    date: {
        color: theme.colors.darkGreen,
        fontSize: "10px",
        textAlign: 'right',
        paddingRight: theme.spacing(2),
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
}));

export default function Preview({ onClick, title, summary, date, imgSrc }) {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.paper} onClick={onClick}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img src={imgSrc} className={classes.mainImg} />
                </Grid>
                <Grid item xs={9}>
                    <Typography className={classes.title}>
                        {title}
                    </Typography>
                    <p className={classes.summary}>
                        {summary}
                    </p>
                    <p className={classes.date}>
                        {date}
                    </p>
                </Grid>
            </Grid>
        </Paper>
    );
}