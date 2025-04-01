import { addEvent, removeEvent } from "./eventManager";
import { createElement } from "./createElement.js";

function updateAttributes(target, originNewProps, originOldProps) {
  // 이벤트 핸들러 처리
  for (const [attr, value] of Object.entries(originNewProps)) {
    if (attr.startsWith("on")) {
      const eventType = attr.slice(2).toLowerCase();
      if (originOldProps[attr]) {
        removeEvent(target, eventType, originOldProps[attr]);
      }
      addEvent(target, eventType, value);
      continue;
    }
    const domAttr = attr === "className" ? "class" : attr;
    if (originOldProps[attr] === originNewProps[attr]) continue;
    target.setAttribute(domAttr, value);
  }

  // 제거된 이벤트 핸들러 정리
  for (const attr of Object.keys(originOldProps)) {
    if (attr.startsWith("on")) {
      const eventType = attr.slice(2).toLowerCase();
      if (originNewProps[attr] === undefined) {
        removeEvent(target, eventType, originOldProps[attr]);
      }
    }
    if (originNewProps[attr] !== undefined) continue;
    target.removeAttribute(attr);
  }
}

export function updateElement(parentElement, newNode, oldNode, index = 0) {
  // 1. 노드가 제거된 경우
  if (!newNode && oldNode) {
    // 해당 위치의 자식 요소가 존재하는지 확인
    if (index < parentElement.childNodes.length) {
      parentElement.removeChild(parentElement.childNodes[index]);
    }
    return;
  }

  // 2. 노드가 추가된 경우
  if (newNode && !oldNode) {
    // 새 노드를 생성하여 추가
    parentElement.appendChild(createElement(newNode));
    return;
  }

  // 3. 노드 타입이 변경된 경우
  if (
    typeof newNode !== typeof oldNode ||
    (typeof newNode === "string" && newNode !== oldNode) ||
    (newNode && oldNode && newNode.type !== oldNode.type)
  ) {
    // 해당 위치의 DOM 요소가 존재하는지 확인
    if (index < parentElement.childNodes.length) {
      // 기존 노드를 새 노드로 교체
      parentElement.replaceChild(
        createElement(newNode),
        parentElement.childNodes[index],
      );
    } else {
      // 해당 위치에 DOM 요소가 없으면 새로 추가
      parentElement.appendChild(createElement(newNode));
    }
    return;
  }

  // 4. 같은 노드 타입이면 속성 업데이트 (객체인 경우)
  if (newNode && oldNode && typeof newNode !== "string") {
    // 해당 위치의 DOM 요소가 존재하는지 확인
    if (index >= parentElement.childNodes.length) {
      // DOM 요소가, vDOM보다 적으면 새로 생성
      parentElement.appendChild(createElement(newNode));
      return;
    }

    // 현재 DOM 요소
    const element = parentElement.childNodes[index];

    // 속성 업데이트
    updateAttributes(element, newNode.props || {}, oldNode.props || {});

    // 자식 요소 업데이트
    const newChildren = newNode.children || [];
    const oldChildren = oldNode.children || [];
    const maxLength = Math.max(newChildren.length, oldChildren.length);

    // 자식 요소들을 재귀적으로 업데이트
    for (let i = 0; i < maxLength; i++) {
      updateElement(element, newChildren[i], oldChildren[i], i);
    }
  }
}
