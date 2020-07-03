import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moores from './moores-18.jpg';
import Preview from '../components/Preview';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#FFFFF",
        // display: 'flex',
        // '& > *': {
        //     margin: 20, //theme.spacing(1),
        // width: "80%",
        // width: theme.spacing(16),
        // height: theme.spacing(16),
        // },
    },
}));

let posts = [{
    title: "Our First Post",
    imgSrc: moores,
    date: "Jul 3, 2020",
    summary: "This is our very first post and it's awesome!!",
    contentFile: './content/first_post.md'
},
{
    title: "Second Post",
    imgSrc: moores,
    date: "Jul 4, 2020",
    summary: "Just another day in the life!",
    contentFile: './content/first_post.md'
}];

export default function Home() {
    const classes = useStyles();
    const cnt = "sample content"
    return (
        <div className={classes.root}>
            <Preview title="We Are the Moore's" content={cnt} imgSrc={moores} date="Apr 20, 2020" />
            <Preview title="We Are the Moore's" content={cnt} imgSrc={moores} date="Apr 20, 2020" />
        </div>
    );
}