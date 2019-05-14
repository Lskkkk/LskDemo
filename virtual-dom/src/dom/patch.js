import { setAttr } from "./element";

// 主要是深度遍历优先与diff同步
let index = 0;
export const patchDom = (node, patches) => {
    walk(node, index, patches);
};

const walk = (node, count, patches) => {
    const currentPatch = patches[count];

    const len = node.childNodes ? node.childNodes.length : 0;
    for (let i = 0; i < len; i++){
        walk(node.childNodes[i], ++index, patches);
    }

    if (currentPatch) {
        walkDom(node, currentPatch);
    }
};

const walkDom = (node, currentPatch) => {
    currentPatch.forEach(patch => {
        switch(patch.type) {
            case 'REMOVE':
                node.parentNode.removeChild(node);
                break;
            case 'TEXT':
                node.textContent = patch.content;
                break;
            case 'REPLACE':
                node.parentNode.replaceChild(patch.content.renderElement(), node);
                break;
            case 'ATTR':
                for (let key in patch.content) {
                    const attr = patch.content[key];
                    if (attr) {
                        setAttr(node, key, attr);
                    } else {
                        node.removeAttribute(key);
                    }
                }
                break;
        }
    });
};