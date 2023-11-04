import React from 'react';
import styled from 'styled-components';

const Year = styled.span`
    font-size: 2.1rem;

    @media (min-width: 767px) {
        font-size: 3.1rem;
    }
`;

const Company = styled.span`
    font-family: 'Lato';
    font-size: 1.2rem;
    font-weight: 300;

    @media (min-width: 767px) {
        font-size: 1.9rem;
    }
`;

const Position = styled.div`
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.05rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 2rem;
    }

    @media (min-width: 767px) {
        align-items: flex-end;
        display: flex;
    }
`;

const Heading = styled.h3`
    align-items: center;
    display: flex;

    > *:not(:last-child) {
        margin-right: 1rem;
    }
`;

const Wrapper = styled.div`
    display: grid;

    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }

    @media (min-width: 767px) {
        margin: auto;
        width: 100% !important;
        max-width: 40rem;
    }
`;

const Story = ({
    frontmatter: {
        title,
        position,
        date,
    },
    rawMarkdownBody,
}) => {
    return (
        <Wrapper>
            <Heading>
                <Year className="year">
                    <span>{date}</span>
                </Year>
                <Company>{title}</Company>
            </Heading>
            { position && (
                <Position>
                    as<br/>
                    {position}
                </Position>
            )}
            {rawMarkdownBody}
        </Wrapper>
    )
}

export default Story;