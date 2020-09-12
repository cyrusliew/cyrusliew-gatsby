import { useEffect } from 'react';
import { gsap } from 'gsap';

const backgroundColors = [
  'linear-gradient(116.82deg, #000000 0%, #24077E 100%)',
  // 'linear-gradient(116.82deg, #000000 0%, #24077E 100%)',
  'linear-gradient(250.2deg, #24077E 1.43%, #000000 98.06%)',
  'linear-gradient(289.58deg, #4134fd 2.98%, #000000 95.49%)',
  'linear-gradient(252.68deg, #24077e 5.04%, #000000 101.11%), #24077e',
  '#1a055e',
];

const useAnimation = (ball, logo, currentIndex, initialized, indexPage) => {
    const logoWrapperSize = window.innerHeight;
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
            left: '-5%',
            height: logoWrapperSize,
            width: logoWrapperSize,
            duration: animationSpeed,
            margin: 'auto',
          }
        )
  
        gsap.to(
          logo.current,
          {
            marginLeft: 0,
            left: '-5%',
            height: logoWrapperSize,
            width: logoWrapperSize,
            duration: animationSpeed,
          }
        );
      }
  
      if (currentIndex !== 0) {
          gsap.to(
              ball.current,
              {
                  height: '265px',
                  width: '265px',
                  duration: animationSpeed,
              }
          )
      
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
              left: 'calc(95% - 200px)',
              right: '10%',
              duration: animationSpeed,
            }
          )
      }
  
      if (currentIndex === 2) {
          const yearSpan = document.querySelector('.year span');

          gsap.to(
              ball.current,
              {
                  background: 'linear-gradient(316.7deg, #0748A5 10.85%, #A60E40 85.41%)',
                  left: yearSpan.getBoundingClientRect().left,
                  marginTop: yearSpan.getBoundingClientRect().top,
                  right: '0',
                  duration: animationSpeed,
              }
          )
      }
    }, [currentIndex])
}

export default useAnimation;