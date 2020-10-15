import React, { useReducer, createContext } from 'react';

const initialState = {
    ball: null,
    logo: null,
    currentIndex: 0,
    isProjectPage: false,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer((state, action) => {
        if (!Object.keys(action.payload).every(key => Object.keys(initialState).includes(key))) {
            throw Error('State does not exists');
        }

        return { ...state, ...action.payload };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider };