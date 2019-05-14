import {createElement, renderElement} from './element';
import {domDiff} from './diff';
import { patchDom } from './patch';

/**
 * 1. 创建element对象
 * 2. 渲染element到dom
 * 3. 创建新的element
 * 4. 执行dom-diff
 * 5. 根据diff结果更新渲染dom
 */

export const renderDom = () => {
  const rootElement = document.getElementById ('root');
  const contentEl = createElement ('ul', {id: 'ul'}, [
    createElement ('li', {}, ['第一项']),
    createElement ('li', {}, ['第二项']),
    createElement ('li', {}, ['第三项']),
  ]);

  const contentElDom = renderElement (contentEl);
  rootElement.appendChild (contentElDom);

  const newContentEl = createElement ('ul', {id: 'ul'}, [
    createElement ('li', {class: 'item4'}, ['第四项']),
    createElement ('li', {class: 'item5'}, ['第五项']),
    createElement ('li', {class: 'item6'}, ['第六项']),
  ]);

  const patches = domDiff (contentEl, newContentEl);

  patchDom(contentElDom, patches);

}

