import React from 'react';
import moores from './moores-18.jpg';
import Page from '../components/Page';
import showdown from 'showdown';
import raw from 'raw.macro';

export default function About() {
    let aboutInfo = {
        title: "We Are the Moores",
        imgSrc: moores,
        date: "Apr 20, 2020",
        summary: "",
        content: raw('./content/about.md')
    };

    let converter = new showdown.Converter();
    let html = converter.makeHtml(aboutInfo.content);

    return (
        <Page title={aboutInfo.title}
            imgSrc={aboutInfo.imgSrc}
            date={aboutInfo.date}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </ Page >
    );
}