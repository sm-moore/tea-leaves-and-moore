import React from 'react';
import Page from '../postComponents/Page';
import showdown from 'showdown';
import raw from 'raw.macro';

const ABOUT_CONFIG = {
    title: "Hi I'm Sara,",
    imgSrc: "https://storage.cloud.google.com/us.artifacts.fluid-mix-282315.appspot.com/about.jpg",
    imgAuthorLink: '',
    imgAuthorName: '???',
    date: "Jul 3, 2020",
    summary: "",
    content: raw('../content/about.md')
};

export default function About() {
    let converter = new showdown.Converter();
    let html = converter.makeHtml(ABOUT_CONFIG.content);

    return (
        <Page title={ABOUT_CONFIG.title}
            imgSrc={ABOUT_CONFIG.imgSrc}
            date={ABOUT_CONFIG.date}
            imgAuthorLink={ABOUT_CONFIG.imgAuthorLink}
            imgAuthorName={ABOUT_CONFIG.imgAuthorName}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </ Page >
    );
}