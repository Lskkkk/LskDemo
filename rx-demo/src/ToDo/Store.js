import { Subject } from 'rxjs/Rx';

let itemList = [];
const state$ = new Subject();

const ToDoStore = {
    subscribe: (setItemList) => state$.subscribe(setItemList),
    add: content => {
        itemList.push({ content, isFinished: false });
        state$.next(itemList);
    },
    toggleFinish: content => {
        itemList = itemList.map(item => {
            if (item.content === content) {
                return {
                    content,
                    isFinished: !item.isFinished
                }
            }
            return item;
        });
        state$.next(itemList);
    }
};

export default ToDoStore;