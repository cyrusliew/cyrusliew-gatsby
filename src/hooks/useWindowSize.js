import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [hasRan, setHasRan] = useState(false);
    const [screenSize, setScreenSize] = useState({
        height: 0,
        width: 0,
    })

    const updateScreenSize = () => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        if(!hasRan) {
            setHasRan(true);
            updateScreenSize()
        }
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        }
    }, [screenSize])

    return screenSize.height;
}

export default useWindowSize;