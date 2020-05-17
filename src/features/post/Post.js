import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FFFFF",
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    title: {
        color: "#FFBF46"
    }
}));

export default function Post() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Typography variant="h2" className={classes.title}>
                    Moore On Tech
                </Typography>
                <p>
                    Words here... lots of them.
                </p>
            </Paper>
        </div>
    );
}