import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';

const BallWrapper = styled.div`
    background: linear-gradient(0deg, #0748A5 8.5%, #8A1851 87.98%);
    border-radius: 100%;
    bottom: 0;
    content: '';
    display: inline-block;
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    top: 0; 
    height: 100px;
    width: 100px;
    transition: unset;
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
        />
    )
})

export default Ball;