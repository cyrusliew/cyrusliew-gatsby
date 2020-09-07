import React from 'react';
import styled from 'styled-components';

const BallWrapper = styled.div`
    background: linear-gradient(140.49deg, #0748A5 8.5%, #8A1851 87.98%);
    border-radius: 100%;
    bottom: 0;
    content: '';
    display: inline-block;
    left: -5%;
    position: absolute;
    right: 0;
    top: 0; 
    height: ${props => props.height}px;
    width: ${props => props.width}px;
`;

const Ball = () => {
    const logoWrapperSize = window.innerHeight;

    return (
        <BallWrapper
            height={logoWrapperSize}
            width={logoWrapperSize}
        />
    )
}

export default Ball;