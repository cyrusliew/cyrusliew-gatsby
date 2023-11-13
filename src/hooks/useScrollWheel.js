import { useState, useEffect } from "react";

const useScrollWheel = (isSliding, slider) => {
  const [eventAdded, setEventAdded] = useState(false);

  useEffect(() => {
    if (eventAdded) {
      return;
    }

    window.addEventListener("wheel", (e) => {
      const isScrollLock = document
        .querySelector("body")
        .classList.contains("scroll-lock");
        
      if (!isScrollLock || !slider.current || isSliding) {
        return;
      }
      const direction = Math.sign(e.deltaY) === -1 ? "up" : "down";

      switch(direction) {
        case "up":
          slider.current.slickPrev();
          break;
        case "down":
          slider.current.slickNext();
          break;
        default:
          break;
      }
    });

    setEventAdded(true);
  }, [eventAdded, slider, isSliding]);
};

export default useScrollWheel;
