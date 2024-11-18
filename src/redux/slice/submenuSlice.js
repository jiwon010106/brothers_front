import {
  SET_HOVERED_MENU,
  RESET_HOVERED_MENU,
  SET_SUBMENU_ITEMS,
} from "./menuSlice";

const initialState = {
  hoveredMenu: null, // 현재 hover 된 메뉴
  submenuItems: {
    company: [
      { id: 1, title: "우아한 문화" },
      { id: 2, title: "히스토리" },
      { id: 3, title: "지속가능경영" },
    ],
    service: [
      { id: 1, title: "배달/포장" },
      { id: 2, title: "커머스" },
      { id: 3, title: "사장님/라이더" },
      { id: 4, title: "컬쳐" },
    ],
    together: [
      { id: 1, title: "배민그린" },
      { id: 2, title: "배민아카데미" },
      { id: 3, title: "파트너 성장" },
      { id: 4, title: "이웃과 함께" },
    ],
    news: [
      { id: 1, title: "알립니다" },
      { id: 2, title: "얼론보도" },
      { id: 3, title: "이슈와 팩트" },
    ],
    default: [],
    // 다른 메뉴 항목도 추가 가능
  },
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOVERED_MENU:
      return {
        ...state,
        hoveredMenu: action.payload,
      };
    case RESET_HOVERED_MENU:
      return {
        ...state,
        hoveredMenu: null,
      };
    case SET_SUBMENU_ITEMS:
      return {
        ...state,
        submenuItems: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
