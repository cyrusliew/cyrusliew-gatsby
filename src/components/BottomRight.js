import React from 'react';
import styled from 'styled-components';
import { sections } from '../helpers/helpers';

const Wrapper = styled.div`
    bottom: 50px;
    display: flex;
    position: absolute;
    right: 50px;
    
    @media (max-width: 541px) {
        bottom: 1.5rem;
        right: 1.5rem;
    }
`;

const NextPage = styled.button`
    background: transparent;
    border: none;
    color: #aaa;
    font-family: 'Lato';
    font-size: 20px;
    letter-spacing: 0.05em;
    outline: none;
    
    @media (max-width: 541px) {
        bottom: 1.5rem;
    }
`;

const ScrollHint = styled.div`
    animation: scrollDown 2s infinite;
    background: white;
    border-radius: 5px;
    height: 5px;
    width: 5px;

    @media (max-width: 541px) {
        animation: scrollUp 2s infinite;
    }

    @keyframes scrollDown {
        0% {
            margin-top: 0;
        }

        70% {
            margin-top: 20px;
            opacity: 0;
        }

        100% {
            margin-top: 20px;
            opacity: 0;
        }
    }

    @keyframes scrollUp {
        0% {
            margin-top: 20px;
        }

        10% {
            margin-top: 20px;
        }


        70% {
            margin-top: 0;
            opacity: 0;
        }

        100% {
            margin-top: 0;
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