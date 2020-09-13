export const getWindowHeight = () => {
    if (!window) {
        return 0;
    }

    return window.outerHeight;
};

export const sections = [
    'Home',
    'About',
    'Past & Present',
    'Creation',
    'Get',
];