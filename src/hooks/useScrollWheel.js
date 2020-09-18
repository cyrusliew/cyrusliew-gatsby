import { useState, useEffect } from 'react';

const useScrollWheel = (isSliding, slider) => {
    const [eventAdded, setEventAdded] = useState(false);

    useEffect(() => {
        if (!eventAdded) {
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
            });

            setEventAdded(true);
        }
    });
}

export default useScrollWheel;