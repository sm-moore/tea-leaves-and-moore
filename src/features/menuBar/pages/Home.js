import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

let posts = {
    'first-post': {
        title: "Our First Post",
        imgSrc: moores,
        date: "Jul 3, 2020",
        summary: "This is our very first post and it's awesome!!",
        content: raw('./content/first_post.md')
    },
    'second-post': {
        title: "Second Post",
        imgSrc: moores,
        date: "Jul 4, 2020",
        summary: "Just another day in the life!",
        content: raw('./content/first_post.md')
    }
};

export default function Home() {
    const classes = useStyles();
    const history = useHistory();
    let match = useRouteMatch();

    function selectPost(pathName) {
        return () => { history.push('/posts/' + pathName) }
    }

    function PostView() {
        let { postPath } = useParams();
        let selectedPost = posts[postPath];

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
            Object.keys(posts).map((pathName, index) => (
                <Preview
                    key={index}
                    onClick={selectPost(pathName)}
                    title={posts[pathName].title}
                    imgSrc={posts[pathName].imgSrc}
                    date={posts[pathName].date}
                    summary={posts[pathName].summary} />
            ))
        )
    }

    return (
        <div className={classes.root}>
            <Switch>
                <Route path={`${match.path}/:postPath`}>
                    <PostView />
                </Route>
                <Route path='/posts'>
                    <PostPreviews />
                </Route>
            </Switch>
        </div>
    );
}