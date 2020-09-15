import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import logo from '../img/logo.svg';

const LogoWrapper = styled.div`
  align-items: center;
  bottom: 0;
  border-radius: 100%;
  display: flex;
  height: 100px;
  justify-content: center;
  left: 0;
  margin: auto;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;

  img {
    height: 200px;
    width: 0;
    right: -100%;
    bottom: -100%;
    position: relative;
    transition: unset;
    transform: rotate(90deg);
  }
`;

const Logo = React.forwardRef(
  (
    {
      backToHome,
      currentIndex,
      initialized
    },
    ref,
  ) => {
  const imgRef = React.createRef(); 
  const logoWrapperSize = useWindowSize();

  useEffect(() => {
    if (currentIndex === 0 && !initialized) {
      gsap.to(
        imgRef.current,
        {
          right: 0,
          bottom: 0,
          height: logoWrapperSize,
          width: logoWrapperSize,
          duration: 2,
          transform: 'rotate(0deg)',
          delay: 1,
        }
      )
    }
  }, [currentIndex, initialized])

  return (
      <LogoWrapper
        ref={ref}
        tabIndex={0}
        type="button"
        height={logoWrapperSize}
        width={logoWrapperSize}
        onClick={backToHome}
      >
          <img src={logo} alt="logo" ref={imgRef} />
      </LogoWrapper>
  )
});

export default Logo;