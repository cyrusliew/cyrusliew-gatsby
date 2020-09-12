import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const Section = styled.div`
    color: white;
    display: flex;

    .slick-slider {
        width: 100%;
    }
`;

const Year = styled.h3`
    font-size: 3.1rem;
    margin-bottom: -2rem;
    text-align: right;
`;

const Company = styled.h4`
    font-family: 'Lato';
    font-size: 1.9rem;
    font-weight: 300;
    text-align: right;
`;

const Position = styled.div`
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.05rem;
`;

const Story = styled.div`
    display: grid !important;
    grid-template-columns: auto auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    margin: auto;
    width: 40rem !important;
`;

const PastPresent = () => (
  <Section className="section">
    <Slider
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode
    >
    <Story>
        <Year className="year">
            <span>2015</span>
        </Year>
        <div />
        <Company>Geometry<br/>Global</Company>
        <Position>
            as<br/>
            Interface Developer,<br/>
            Front End Web Programmer
        </Position>
        <div />
        <div>
            When I fell in love in programming, flash banner, facebook social campaign page, interactive website were the best companion during that time.
        </div>
    </Story>
    </Slider>
  </Section>
);

export default PastPresent;