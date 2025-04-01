export function normalizeVNode(vNode) {
  // null, undefined, boolean 값을 빈 문자열로 변환
  if (vNode === null || vNode === undefined || typeof vNode === "boolean") {
    return "";
  }

  // 숫자를 문자열로 변환
  if (typeof vNode === "number") {
    return String(vNode);
  }
  // 숫자를 문자열로 변환
  if (typeof vNode === "string") {
    return vNode;
  }

  if (typeof vNode.type === "function") {
    const Component = vNode.type;
    const props = { ...(vNode.props || {}) };
    // children 전달 (props.children이 없는 경우에만)
    if (!props.children) props.children = vNode.children;
    const renderedVNode = Component(props);
    return normalizeVNode(renderedVNode);
  }

  // vNode.children이 배열이 아닐 경우 배열로 변환
  let children = []; // vNode.children이 없을 경우 방지
  if (vNode.children) {
    children = Array.isArray(vNode.children)
      ? vNode.children
      : [vNode.children];

    // 그 외의 경우, vNode의 자식 요소들을 재귀적으로 표준화하고, null 또는 undefined 값을 필터링하여 반환합니다.
    const normalizedChildren = children
      .map((child) => normalizeVNode(child))
      .filter(
        (child) =>
          child !== "" &&
          child !== null &&
          child !== undefined &&
          child !== false,
      );

    return { ...vNode, children: normalizedChildren };
  }

  return vNode;
}
