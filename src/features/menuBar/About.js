import React from 'react';
import moores from './moores-18.jpg';
import Page from './Page';

export default function About() {
    const cnt = "This is a sample about us 2."
    return (
        <Page title="We Are the Moore's" content={cnt} imgSrc={moores} date="Apr 20, 2020" />
    );
}