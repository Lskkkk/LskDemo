import render from '../render';
let state = null;

const useStateT = (initialState) => {
    if (!state) {
        state = initialState;
    }
    return [state, setStateT];
};

const setStateT = (newState) => {
    state = newState;
    render(); // 模拟react的render，将整个view重新渲染一遍
};

export default useStateT;