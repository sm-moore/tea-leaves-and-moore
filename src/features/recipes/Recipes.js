import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Preview from '../postComponents/Preview';
import showdown from 'showdown';
import raw from 'raw.macro';
import Page from '../postComponents/Page';
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom";


const RECIPES_CONFIG = {
    'vegan-pb-cups': {
        title: "Vegan Peanut Butter Cups",
        imgSrc: 'https://storage.cloud.google.com/us.artifacts.fluid-mix-282315.appspot.com/vegan_pb_cups.jpeg',
        date: "Jul 3, 2020",
        summary: "Chocolate covered peanut butter? What's not to love? Plus it's vegan!",
        content: raw('../content/vegan_pb_cups.md')
    }
};

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));


export default function Recipes() {
    const classes = useStyles();
    const history = useHistory();
    let match = useRouteMatch();

    function selectPost(pathName) {
        return () => { history.push('/recipes/' + pathName) }
    }

    function PostView() {
        let { postPath } = useParams();
        let selectedPost = RECIPES_CONFIG[postPath];

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
            Object.keys(RECIPES_CONFIG).map((pathName, index) => (
                <Preview
                    key={index}
                    onClick={selectPost(pathName)}
                    title={RECIPES_CONFIG[pathName].title}
                    imgSrc={RECIPES_CONFIG[pathName].imgSrc}
                    date={RECIPES_CONFIG[pathName].date}
                    summary={RECIPES_CONFIG[pathName].summary} />
            ))
        )
    }

    return (
        <div className={classes.root}>
            <Switch>
                <Route path={`${match.path}/:postPath`}>
                    <PostView />
                </Route>
                <Route path={match.path}>
                    <PostPreviews />
                </Route>
            </Switch>
        </div >
    );
}