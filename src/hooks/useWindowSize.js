import window from 'global/window';

const useWindowSize = () => {
    if (!window) {
        return document.querySelector('body').offsetHeight;
    }

    return window.outerHeight;
}

export default useWindowSize;