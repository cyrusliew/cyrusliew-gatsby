import React from 'react';
import styled from 'styled-components';
import { sections } from '../helpers/helpers';

const Wrapper = styled.div`
    bottom: 50px;
    display: flex;
    position: absolute;
    right: 50px;
`;

const NextPage = styled.button`
    background: transparent;
    border: none;
    color: #aaa;
    font-family: 'Lato';
    font-size: 20px;
    letter-spacing: 0.05em;
    outline: none;
`;

const ScrollHint = styled.div`
    animation: scrollDown 2s infinite;
    background: white;
    border-radius: 5px;
    height: 5px;
    width: 5px;

    @keyframes scrollDown {
        0% {
            margin-top: 0;
        }

        70% {
            margin-top: 15px;
            opacity: 0;
        }

        100% {
            margin-top: 15px;
            opacity: 0;
        }
    }
`;

const BottomRight = ({
    currentIndex
}) => {
    return (
        <Wrapper>
            <ScrollHint />
            <NextPage>
                {sections[currentIndex]}
            </NextPage>
        </Wrapper>
    )
}

export default BottomRight;