import { useEffect } from "react";
import { gsap } from "gsap";
import useWindowSize from "../hooks/useWindowSize";
import window from "global";

const backgroundColors = [
  "linear-gradient(116.82deg, #000000 0%, #24077E 100%)",
  "linear-gradient(227.2deg, rgb(36, 7, 126) 5.43%, rgb(0, 0, 0) 41.06%)",
  "linear-gradient(289.58deg, #4134fd 2.98%, #000000 95.49%)",
  "linear-gradient(252.68deg, #24077e 5.04%, #000000 101.11%)",
  "linear-gradient(252.68deg, #1a055e 5.04%, #1a055e 101.11%)",
];

const logoSpace = () => (window.outerWidth > 540 ? "50px" : "1.5rem");
const logoBallLeft = () => (window.outerWidth > 540 ? "-5%" : "0");
const logoSizeTopLeft = () => (window.outerWidth > 540 ? 85 : "12vw");

const useAnimation = (
  ball,
  logo,
  copyright,
  name,
  currentIndex,
  initialized,
  indexPage
) => {
  const logoWrapperSize = useWindowSize();
  const animationSpeed = 0.5;
  const ballAnimationSpeed = animationSpeed * 2;
  const ballFirstPage = {
    background: "linear-gradient(140.49deg, #0748A5 8.5%, #8A1851 87.98%)",
    marginLeft: 0,
    left: logoBallLeft(),
    height: logoWrapperSize,
    width: logoWrapperSize,
  };

  const logoFirstPage = {
    marginLeft: 0,
    left: logoBallLeft(),
    height: logoWrapperSize,
    width: logoWrapperSize,
  };

  useEffect(() => {
    gsap.to(indexPage.current, {
      background: backgroundColors[currentIndex],
    });

    if (currentIndex === 0 && !initialized) {
      ball.current.style.background =
        "linear-gradient(140.49deg, #8A1851 8.5%, #0748A5 87.98%)";

      gsap.to(ball.current, {
        ...ballFirstPage,
        duration: 2,
        delay: 0.8,
      });

      gsap.to(logo.current, {
        ...logoFirstPage,
        transform: "rotate(0deg) scaleX(1)",
        duration: 2,
        delay: 0.8,
      });

      gsap.to(name.current, {
        opacity: 1,
        delay: 2.5,
      });

      gsap.set(name.current, {
        position: "relative",
      });

      if (window.outerWidth < 541) {
        gsap.set(name.current, {
          position: "absolute",
          bottom: "20%",
          right: "1.5rem",
        });
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === 0 && initialized) {
      gsap.to(ball.current, {
        ...ballFirstPage,
        duration: animationSpeed,
        startAt: 0,
      });

      gsap.to(logo.current, {
        ...logoFirstPage,
        duration: animationSpeed,
        startAt: 0,
        marginTop: 0,
      });

      gsap.to(copyright.current, {
        bottom: "-100%",
      });

      gsap.to(name.current, {
        opacity: 1,
      });

      gsap.set(name.current, {
        position: "relative",
        bottom: "unset",
        right: "unset",
      });

      if (window.outerWidth < 541) {
        gsap.set(name.current, {
          position: "absolute",
          bottom: "20%",
          right: "1.5rem",
        });
      }
      
      ball.current.style.marginTop = "auto";
      // logo.current.style.marginTop = 0;
    }

    if (currentIndex !== 0) {
      gsap.killTweensOf(logo.current);
      gsap.killTweensOf(ball.current);

      gsap.set(logo.current, {
        marginLeft: 0,
        marginTop: logoSpace(),
        transform: "rotate(0deg) scale(1)",
        zIndex: 1,
      });

      gsap.to(copyright.current, {
        bottom: "11rem",
      });

      gsap.to(ball.current, {
        height: "265px",
        width: "265px",
        duration: animationSpeed,
        transform: "scale(1)",
      });

      gsap.to(logo.current, {
        borderRadius: 0,
        duration: animationSpeed,
        height: logoSizeTopLeft(),
        left: logoSpace(),
        marginTop: logoSpace(),
        width: logoSizeTopLeft(),
      });
    }

    if (currentIndex === 1) {
      gsap.set(logo.current, {
        zIndex: 0,
      });

      gsap.set(ball.current, {
        marginTop: "auto",
      });

      gsap.to(ball.current, {
        background:
          "linear-gradient(-90deg, #24077E 0%, #4134FD 100%), #FFFFFF",
        left: "calc(75% - 200px)",
        duration: ballAnimationSpeed,
        transform: "scale(1)",
      });
    }

    if (currentIndex === 2) {
      gsap.to(ball.current, {
        height: "265px",
        width: "265px",
        transform: "scale(0)",
        duration: 0.5,
      });

      let timeout;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        const yearSpan = document.querySelector(
          "#past-present .slick-current .year span"
        );
        const ball = document.querySelector(".ball");

        const {
          y: yearSpanTop,
          x: yearSpanLeft,
          width: yearSpanWidth,
          height: yearSpanHeight,
        } = yearSpan.getBoundingClientRect();

        const centerLeft = yearSpanLeft - 132.5 + yearSpanWidth / 2;
        const centerTop = yearSpanTop - 132.5 + yearSpanHeight / 2;

        gsap.set(ball, {
          left: centerLeft,
          marginTop: centerTop,
          right: "unset",
        });

        gsap.to(ball, {
          background:
            "linear-gradient(316.7deg, #0748A5 10.85%, #A60E40 85.41%)",
          transform: "scale(1)",
          duration: animationSpeed,
        });
      }, 500);
    }

    if (currentIndex === 3) {
      gsap.to(ball.current, {
        background: "linear-gradient(316.7deg, #0748A5 10.85%, #A60E40 85.41%)",
        left: "95%",
        // marginTop: '30vh',
        right: "0",
        duration: animationSpeed,
      });
    }

    if (currentIndex === 4) {
      ball.current.style.marginTop = "auto";
      ball.current.style.marginLeft = "auto";

      gsap.to(ball.current, {
        background:
          "linear-gradient(137.8deg, #4134FD 8.25%, #24077E 90.93%), #F9F9F9",
        left: 0,
        right: 0,
        height: logoWrapperSize * 1.2,
        width: logoWrapperSize * 1.2,
      });
    }
  }, [currentIndex]);
};

export default useAnimation;
