import render from '../render';
/**
 * 增加同时使用多个state的支持
 */

let state = [];
let currentIndex = 0;

const useStateT = (initialState) => {
    if (!state[currentIndex]) {
        state[currentIndex] = initialState;
    }
    const tmpIndex = currentIndex;
    const setStateT = (newState) => {
        state[tmpIndex] = newState;
        currentIndex = 0;
        render();
    };
    return [state[currentIndex++], setStateT];
};

export default useStateT;