import React from 'react';
import styled from 'styled-components';

const Year = styled.h3`
    font-size: 3.1rem;

    @media (min-width: 540px) {
        margin-bottom: -2rem;
        text-align: right;
    }
`;

const Company = styled.h4`
    font-family: 'Lato';
    font-size: 1.9rem;
    font-weight: 300;

    @media (min-width: 540px) {
        text-align: right;
    }
`;

const Position = styled.div`
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.05rem;

    @media (max-width: 541px) {
        margin-bottom: 2rem;
    }
`;

const Wrapper = styled.div`
    text-align: center;

    @media (min-width: 540px) {
        display: grid !important;
        grid-template-columns: auto auto;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
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
            <Year className="year">
                <span>{date}</span>
            </Year>
            <div />
            <Company>{title}</Company>
            {
                position && (
                    <>
                        <Position>
                            as<br/>
                            {position}
                        </Position>    
                        <div />
                    </>
                )
            }
            <div>
                {rawMarkdownBody}
            </div>
        </Wrapper>
    )
}

export default Story;