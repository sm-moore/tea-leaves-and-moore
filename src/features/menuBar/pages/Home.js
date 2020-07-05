import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Preview from '../components/Preview';
import showdown from 'showdown';
import raw from 'raw.macro';
import Page from '../components/Page';
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

let posts = {
    'first-post': {
        title: "Quarter 3 Goals",
        imgSrc: 'https://storage.cloud.google.com/us.artifacts.fluid-mix-282315.appspot.com/Q3_goals_1.jpg',
        imgAuthorLink: 'https://unsplash.com/@wsheng1011?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        imgAuthorName: 'Han Wei Sheng',
        imgSrcWebsiteLink: 'https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        imgSrcWebsiteName: 'Unsplash',
        date: "Jul 3, 2020",
        summary: "Setting personal and professional goals.",
        content: raw('./content/quarter_3_goals.md')
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
                date={selectedPost.date}
                imgAuthorLink={selectedPost.imgAuthorLink}
                imgAuthorName={selectedPost.imgAuthorName}
                imgSrcWebsiteLink={selectedPost.imgSrcWebsiteLink}
                imgSrcWebsiteName={selectedPost.imgSrcWebsiteName}>
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