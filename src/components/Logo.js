import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const LogoWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  height: ${props => props.height}px;
  justify-content: center;
  left: -5%;
  margin: auto;
  position: absolute;
  top: 0;
  width: ${props => props.width}px;

  img {
    border-radius: 100%;
    height: 100%;
    position: relative;
    transition: all 1s ease;
  }
`;

const Logo = () => {
    const logoWrapperSize = window.innerHeight;

    return (
        <LogoWrapper
            height={logoWrapperSize}
            width={logoWrapperSize}
        >
            <img src={logo} alt="logo" />
        </LogoWrapper>
    )
};

export default Logo;