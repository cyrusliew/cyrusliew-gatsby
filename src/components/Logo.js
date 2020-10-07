import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'gatsby';
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import logo from '../img/logo.svg';

const LogoWrapper = styled.a`
  align-items: center;
  bottom: 0;
  // border-radius: 100%;
  display: flex;
  height: 100px;
  justify-content: center;
  left: 0;
  margin: auto;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(90deg) scaleX(0);
  transform-origin: 80% 100%;
  width: 100px;

  img {
    height: 100%;
    width: 100%;
    position: relative;
    transition: unset;
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
      // gsap.to(
      //   imgRef.current,
      //   {
      //     right: 0,
      //     bottom: 0,
      //     height: logoWrapperSize,
      //     width: logoWrapperSize,
      //     duration: 2,
      //     delay: 1,
      //   }
      // )
    }

    if (currentIndex !== 0) {
      // gsap.killTweensOf(imgRef.current);
    }
  }, [currentIndex, initialized])

  return (
      <LogoWrapper
        ref={ref}
        href="/"
        tabIndex={0}
        type="button"
        height={logoWrapperSize}
        width={logoWrapperSize}
        onClick={backToHome}
        className="logo"
      >
          <img src={logo} alt="logo" ref={imgRef} />
      </LogoWrapper>
  )
});

export default Logo;