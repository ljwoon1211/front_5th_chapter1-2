import { addEvent } from "./eventManager";

export function createElement(vNode) {
  // null, undefined, boolean 값을 빈 문자열로 변환
  if (vNode === null || vNode === undefined || typeof vNode === "boolean") {
    return document.createTextNode("");
  }

  if (typeof vNode === "string" || typeof vNode === "number") {
    return document.createTextNode(String(vNode));
  }

  if (Array.isArray(vNode)) {
    const fragment = document.createDocumentFragment();
    vNode.forEach((element) => {
      const childElement = createElement(element);
      fragment.appendChild(childElement);
    });
    return fragment;
  }

  // tag에 대한 element를 만든다.
  const $el = document.createElement(vNode.type);

  updateAttributes($el, vNode.props);

  vNode.children.map(createElement).forEach((child) => $el.appendChild(child));

  // 변환된 dom을 반환한다.
  return $el;
}

function updateAttributes($el, props) {
  // - vNode.props의 속성들을 적용 (이벤트 리스너, className, 일반 속성 등 처리)
  if (!props) return;
  // 정의한 속성을 삽입한다.
  Object.entries(props)
    .filter(
      ([value]) => value !== null && value !== undefined && value !== false,
    )
    .forEach(([attr, value]) => {
      // 이벤트 리스너 처리
      if (attr.startsWith("on")) {
        const eventType = attr.slice(2).toLowerCase();
        addEvent($el, eventType, value);
        return; // 이벤트 핸들러가 일반 속성으로도 처리되는 것 방지
      }
      // className을 class로 변환
      else if (attr === "className") {
        $el.setAttribute("class", value);
      } else {
        $el.setAttribute(attr, value);
      }
    });
}
