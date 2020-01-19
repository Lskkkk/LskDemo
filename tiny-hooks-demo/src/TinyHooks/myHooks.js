import render from '../render';

let state = [];
let currentIndex = 0;
let watches = []; // 存储每个useEffect需要监听的数据
let lastCleanEffect = []; // 存储每个useEffect提供的clean effect的方法
let isFirstRender = true;

const useStateT = (initialState) => {
    if (!state[currentIndex]) {
        state[currentIndex] = initialState;
    }
    const tmpIndex = currentIndex;
    const setStateT = (newState) => {
        state[tmpIndex] = newState;
        currentIndex = 0;
        isFirstRender = false;
        render();
    };
    return [state[currentIndex++], setStateT];
};

const useEffectT = (callback, watch) => {
    lastCleanEffect[currentIndex] && lastCleanEffect[currentIndex]();
    if (!watches[currentIndex]) {
        watches[currentIndex] = watch;
    }
    if (watches[currentIndex] === undefined) { // didMount+didUpdate
        lastCleanEffect[currentIndex] = callback();
    } else if (watches[currentIndex].length === 0) { // didMount
        if (isFirstRender) {
            callback();
        }
    } else if (JSON.stringify(watches[currentIndex]) !== JSON.stringify(watch)) { // 这里比较方法偷点懒，其实应该是浅比较
        lastCleanEffect[currentIndex] = callback();
    }
    currentIndex++;
};

export {
    useStateT,
    useEffectT
};