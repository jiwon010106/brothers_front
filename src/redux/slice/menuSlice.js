// 서브메뉴 항목과 hover 상태 관련 액션 정의
export const SET_HOVERED_MENU = "SET_HOVERED_MENU";
export const RESET_HOVERED_MENU = "RESET_HOVERED_MENU";
export const SET_SUBMENU_ITEMS = "SET_SUBMENU_ITEMS";

// 액션 생성자
export const setHoveredMenu = (menu) => ({
  type: SET_HOVERED_MENU,
  payload: menu,
});

export const resetHoveredMenu = () => ({
  type: RESET_HOVERED_MENU,
});

export const setSubmenuItems = (items) => ({
  type: SET_SUBMENU_ITEMS,
  payload: items,
});
