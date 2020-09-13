export const getWindowHeight = () => {
    if (!window) {
        return 0;
    }

    return window.outerHeight;
};