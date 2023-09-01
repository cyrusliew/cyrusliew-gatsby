import { useState, useEffect } from "react";

const useScrollWheel = (isSliding, slider) => {
  const [eventAdded, setEventAdded] = useState(false);

  useEffect(() => {
    if (!eventAdded) {
      window.addEventListener("wheel", (e) => {
        const isScrollLock = document
          .querySelector("body")
          .classList.contains("scroll-lock");
        if (isScrollLock && slider.current) {
          const direction = Math.sign(e.deltaY) === -1 ? "up" : "down";

          if (!isSliding) {
            if (direction === "up") {
              slider.current.slickPrev();
            }

            slider.current.slickNext();
          }
        }
      });

      setEventAdded(true);
    }
  }, [eventAdded, slider, isSliding]);
};

export default useScrollWheel;
