import React from 'react';
import styled from 'styled-components';
import { sections } from '../helpers/helpers';

const Wrapper = styled.div`
    color: white;
    position: absolute;
    top: 50px;
    right: 50px;
`;

const Button = styled.button`
    background: transparent;
    border: none;
    color: white;
    outline: none;
`;

const Burger = styled(Button)`
    font-size: 24px;
`;

const CurrentPage = styled(Button)`
    font-family: 'Lato';
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 0.05em;
    margin-right: 2rem;
`;

const TopRight = ({
    currentIndex,
}) => {
    return (
        <Wrapper>
            { currentIndex !== 0 && (
                <CurrentPage>{sections[currentIndex]}</CurrentPage>
            )}
            <Burger><i className="fas fa-hamburger" /></Burger>
        </Wrapper>
    )
}

export default TopRight;