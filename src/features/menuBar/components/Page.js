import React from 'react';
import PropTypes from 'prop-types';
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
        color: theme.colors.darkGrey,
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
    imgSpan: {
        paddingLeft: theme.spacing(2),
        fontSize: '12px',
        color: theme.colors.lightGreen,
    },
    imgLink: {
        fontSize: '12px',
        color: theme.colors.lightGreen,
    },
}));


export default function Page(props) {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.paper}>
            <img src={props.imgSrc} className={classes.mainImg} />
            <span className={classes.imgSpan}>
                {'Photo by '}
                <a target="_blank" className={classes.imgLink} href={props.imgAuthorLink}>
                    {props.imgAuthorName}
                </a>
                {
                    props.imgSrcWebsiteName &&
                    <span>
                        {' on '}
                        < a target="_blank" className={classes.imgLink} href={props.imgSrcWebsiteLink} >
                            {props.imgSrcWebsiteName}
                        </a >
                    </span>
                }
            </span>
            <Typography className={classes.title}>
                {props.title}
            </Typography>
            <div className={classes.content}>
                {props.children}
            </div>
            <p className={classes.date}>
                {props.date}
            </p>
        </Paper >
    );
}

Page.propTypes = {
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    date: PropTypes.string,
    imgAuthorLink: PropTypes.string,
    imgAuthorName: PropTypes.string,
    imgSrcWebsiteLink: PropTypes.string,
    imgSrcWebsiteName: PropTypes.string,
};