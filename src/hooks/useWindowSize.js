const useWindowSize = () => {
    if (!window) {
        return document.querySelector('body').offsetHeight;
    }

    return window.innerHeight;
}

export default useWindowSize;