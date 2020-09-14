import { useEffect } from 'react';
import { gsap } from 'gsap';
import useWindowSize from '../hooks/useWindowSize';

const backgroundColors = [
  'linear-gradient(116.82deg, #000000 0%, #24077E 100%)',
  'linear-gradient(227.2deg, rgb(36, 7, 126) 5.43%, rgb(0, 0, 0) 41.06%)',
  'linear-gradient(289.58deg, #4134fd 2.98%, #000000 95.49%)',
  'linear-gradient(252.68deg, #24077e 5.04%, #000000 101.11%)',
  'linear-gradient(252.68deg, #1a055e 5.04%, #1a055e 101.11%)',
];

const useAnimation = (ball, logo, copyright, currentIndex, initialized, indexPage) => {
    const logoWrapperSize = useWindowSize();
    const animationSpeed = 0.5;

    useEffect(() => {
      gsap.to(
        indexPage.current,
        {
          background: backgroundColors[currentIndex], 
        }
      )

      if (currentIndex === 0 && !initialized) {
        gsap.to(
          ball.current,
          {
            background: 'linear-gradient(140.49deg, #0748A5 8.5%, #8A1851 87.98%)',
            marginLeft: 0,
            left: '-5%',
            height: logoWrapperSize,
            width: logoWrapperSize,
            duration: 2,
            delay: 2,
          }
        )
  
        gsap.to(
          logo.current,
          {
            marginLeft: 0,
            left: '-5%',
            height: logoWrapperSize,
            width: logoWrapperSize,
            duration: 2,
            delay: 2,
          }
        );
      }
    }, [currentIndex])
    
    useEffect(() => {
      if (currentIndex === 0 && initialized) {
        gsap.to(
          ball.current,
          {
            background: 'linear-gradient(140.49deg, #0748A5 8.5%, #8A1851 87.98%)',
            marginLeft: 0,
            left: '-10%',
            height: logoWrapperSize,
            width: logoWrapperSize,
            duration: animationSpeed,
            margin: 'auto',
          }
        )
  
        gsap.to(
          logo.current,
          {
            marginTop: 'auto',
            marginLeft: 0,
            borderRadius: '100%',
            left: '-10%',
            height: logoWrapperSize,
            width: logoWrapperSize,
            duration: animationSpeed,
          }
        );

        gsap.to(
          copyright.current,
          {
            bottom: '-100%',
          }
        );
      }
  
      if (currentIndex !== 0) {
        gsap.to(
          copyright.current,
          {
            bottom: '11rem',
          }
        );

        gsap.to(
            ball.current,
            {
                height: '265px',
                width: '265px',
                duration: animationSpeed,
            }
        );
      
        gsap.to(
          logo.current,
          {
            borderRadius: 0,
            duration: animationSpeed,
            height: 85,
            left: 50,
            marginTop: 50,
            width: 85,
          }
        );
      }
  
      if (currentIndex === 1) {
          gsap.to(
            ball.current,
            {
              background: 'linear-gradient(-90deg, #24077E 0%, #4134FD 100%), #FFFFFF',
              left: 'calc(75% - 200px)',
              duration: animationSpeed,
            }
          )
      }
  
      if (currentIndex === 2) {
          const yearSpan = document.querySelector('.slick-current .year span');
          const ballElement = ball.current;
          const {
            top: yearSpanTop,
            left: yearSpanLeft,
            width: yearSpanWidth,
            height: yearSpanHeight, 
          } = yearSpan.getBoundingClientRect();

          const {
            width: ballHalfWidth,
            height: ballHalfHeight,
          } = ballElement.getBoundingClientRect();

          const centerLeft = yearSpanLeft - (ballHalfWidth / 2) + (yearSpanWidth / 2);
          const centerTop = yearSpanTop - (ballHalfHeight / 2) + (yearSpanHeight / 2);

          gsap.to(
              ball.current,
              {
                  background: 'linear-gradient(316.7deg, #0748A5 10.85%, #A60E40 85.41%)',
                  left: centerLeft,
                  marginTop: centerTop,
                  right: 'unset',
                  duration: animationSpeed,
              }
          )
      }

      if (currentIndex === 3) {
        gsap.to(
          ball.current,
          {
              background: 'linear-gradient(316.7deg, #0748A5 10.85%, #A60E40 85.41%)',
              left: '95%',
              // marginTop: '30vh',
              right: '0',
              duration: animationSpeed,
          }
        )
      }

      if (currentIndex === 4) {
        gsap.to(
          ball.current,
          {
            background: 'linear-gradient(137.8deg, #4134FD 8.25%, #24077E 90.93%), #F9F9F9',
            left: 0,
            margin: 'auto',
            right: 0,
            height: logoWrapperSize * 1.2,
            width: logoWrapperSize * 1.2,
          }
        )
      }
    }, [currentIndex])
}

export default useAnimation;