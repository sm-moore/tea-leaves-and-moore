import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moores from './moores-18.jpg';
import Preview from '../components/Preview';
import showdown from 'showdown';
import raw from 'raw.macro';
import Page from '../components/Page';
import { useHistory } from "react-router-dom";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

let posts = [{
    title: "Our First Post",
    imgSrc: moores,
    date: "Jul 3, 2020",
    summary: "This is our very first post and it's awesome!!",
    content: raw('./content/first_post.md')
},
{
    title: "Second Post",
    imgSrc: moores,
    date: "Jul 4, 2020",
    summary: "Just another day in the life!",
    content: raw('./content/first_post.md')
}];

export default function Home() {
    const classes = useStyles();
    const history = useHistory();
    let match = useRouteMatch();
    console.log(match.path)

    function selectPost(index) {
        return () => { console.log(index); history.push('/posts/' + index) }
    }

    function PostView() {
        let { postIdx } = useParams();
        let selectedPost = posts[postIdx];

        let converter = new showdown.Converter();
        let html = converter.makeHtml(selectedPost.content);

        return (
            <Page title={selectedPost.title}
                imgSrc={selectedPost.imgSrc}
                date={selectedPost.date}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </ Page >
        )
    }

    function PostPreviews() {
        return (
            posts.map((postInfo, index) => (
                <Preview
                    key={index}
                    onClick={selectPost(index)}
                    title={postInfo.title}
                    imgSrc={postInfo.imgSrc}
                    date={postInfo.date}
                    summary={postInfo.summary} />
            ))
        )
    }
    return (
        <div className={classes.root}>
            <Switch>
                <Route path={`${match.path}/:postIdx`}>
                    <PostView />
                </Route>
                <Route path='/posts'>
                    <PostPreviews />
                </Route>
            </Switch>
        </div>
    );
}