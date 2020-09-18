import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    align-items: center;
    color: white;
    display: flex;
`;

const AboutContent = styled.div`
    margin: auto 10%;
    max-width: 44.75rem;

    p:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

const Title = styled.h2`
    font-size: 54px;
    font-style: italic;
    margin-bottom: 2rem;
`;

const About = () => (
    <Section className="section section--gradient">
        <AboutContent>
            <Title>Hello.</Title>
            <p>This is Cyrus - A full stack developer with a solid 7 years of experience in Web Design & Development.</p>
            <p>I have been living in New Zealand for 4 years.</p>
            <p>I am passionate about my life, always have fun in getting the biggest satisfaction when doing any design works.</p>
        </AboutContent>
    </Section>
)

export default About;