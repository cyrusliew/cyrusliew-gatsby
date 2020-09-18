import { useState, useEffect } from 'react';

const useScrollWheel = (isSliding, slider) => {
    const [scrollDirection, setscrollDirection] = useState(null);

    window.addEventListener('wheel', (e) => {
        const direction = Math.sign(e.deltaY) === -1 ? 'up' : 'down';
        console.log('[Scrolling]', direction);
        if (!isSliding) {
            if (direction === 'up') {
                slider.current.slickPrev();
                return console.log('[Slider will go UP]');
            }

            slider.current.slickNext();
            console.log('[Slider will go DOWN]');
        }
    })
}

export default useScrollWheel;