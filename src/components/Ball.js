import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
// import worldMap from '../img/world.svg';
import worldMap from '../img/world-white.svg';

const BallWrapper = styled.div`
    background: linear-gradient(0deg, #0748A5 8.5%, #8A1851 87.98%);
    border-radius: 100%;
    bottom: 0;
    content: '';
    display: inline-block;
    left: 0;
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0; 
    transition: unset;
    width: 100px;
`;

const Ball = React.forwardRef((props, ref) => {
    const logoWrapperSize = useWindowSize();

    return (
        <BallWrapper
            className="ball"
            {...props}
            height={logoWrapperSize}
            width={logoWrapperSize}
            ref={ref}
        >
            {/* <img src={worldMap} /> */}
        </BallWrapper>
    )
})

export default Ball;