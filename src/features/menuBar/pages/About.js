import React from 'react';
import Page from '../components/Page';
import showdown from 'showdown';
import raw from 'raw.macro';

export default function About() {
    let aboutInfo = {
        title: "Hi I'm Sara,",
        imgSrc: "https://storage.cloud.google.com/us.artifacts.fluid-mix-282315.appspot.com/about.jpg",
        imgAuthorLink: '',
        imgAuthorName: '???',
        date: "Jul 3, 2020",
        summary: "",
        content: raw('./content/about.md')
    };

    let converter = new showdown.Converter();
    let html = converter.makeHtml(aboutInfo.content);

    return (
        <Page title={aboutInfo.title}
            imgSrc={aboutInfo.imgSrc}
            date={aboutInfo.date}
            imgAuthorLink={aboutInfo.imgAuthorLink}
            imgAuthorName={aboutInfo.imgAuthorName}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </ Page >
    );
}