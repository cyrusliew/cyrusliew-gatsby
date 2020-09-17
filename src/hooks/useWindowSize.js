import window from 'global/window';

const useWindowSize = () => {
    if (window.outerHeight > window.outerWidth) {
        return window.outerWidth;
    }

    return window.outerHeight;
}

export default useWindowSize;