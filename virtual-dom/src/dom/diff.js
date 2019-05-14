let patches = {};
let count = 0;

export const domDiff = (oldEl, newEl) => {
    patches = {};
    run(oldEl, newEl, count);
    return patches;
};

/**
 * 新老节点比较步骤如下：
 * 1. 先判断是否节点移除
 * 2. 如果都是文本，直接替换
 * 3. 类型相同，就比较属性
 * 4. 对于子节点，递归比较差异，用序号标识
 * 5. 类型不同的节点，直接替换 
 */
const run = (oldEl, newEl, index) => {
    const current = [];

    if (!newEl) {
        current.push({
            type: 'REMOVE'
        });
    } else if (typeof(oldEl) === 'string' && typeof(newEl) === 'string' && oldEl !== newEl) {
        current.push({
            type: 'TEXT',
            content: newEl
        });
    } else if (oldEl.type === newEl.type) {
        const attr = diffAttr(oldEl.props, newEl.props);
        if (Object.keys(attr).length > 0) {
            current.push({
                type: 'ATTR',
                content: attr
            });
        }
        diffChildren(oldEl.children, newEl.children);
    } else {
        current.push({
            type: 'REPLACE',
            content: newEl
        });
    }

    if (current.length > 0) {
        patches[index] = current;
    }
};

/**
 * 比较属性的方法,返回变更记录
 * 1. 移除新节点中不存在属性
 * 2. 替换相同属性的内容
 * 3. 新增新属性
 */
const diffAttr = (oldProps, newProps) => {
    const attrPatches = {};

    for (const op in oldProps) {
        if (newProps.hasOwnProperty(op)) {
            if (oldProps[op] !== newProps[op]) {
                attrPatches[op] = newProps[op];
            }
        } else {
            attrPatches[op] = null;
        }

    }

    for (const np in newProps) {
        if (!oldProps.hasOwnProperty(np)) {
            attrPatches[np] = newProps[np];
        }
    }

    return attrPatches;
};

/**
 * 循环比较子节点的差异
 */
const diffChildren = (oldChildren, newChildren) => {
    oldChildren.forEach((child, i) => {
        run(child, newChildren[i], ++count);
    });
};