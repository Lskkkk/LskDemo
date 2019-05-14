const createElement = (type, props, children) => {
    return {
        type,
        props,
        children
    };
};

const renderElement = (el) => {
    // 创建dom
    const elDom = document.createElement(el.type);

    // 处理dom的props
    for (const key in el.Props) {
        setAttr(elDom, key, el.Props[key]);
    }

    // 处理dom的children
    el.children && el.children.forEach((childEl) => {
        let childDom;
        if (typeof (childEl) === 'string') {
            childDom = document.createTextNode(childEl);
        } else {
            childDom = renderElement(childEl);
        }
        elDom.appendChild(childDom);
    });
    return elDom;
};

const setAttr = (elDom, key, attr) => {
    switch (key) {
        default:
            elDom.setAttribute(key, attr);
            break;
    }
};

export {
    createElement,
    renderElement,
    setAttr
};