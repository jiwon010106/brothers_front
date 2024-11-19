import React from "react";
import { useSelector } from "react-redux";

const Submenu = () => {
  const hoveredMenu = useSelector((state) => state.hoveredMenu);
  const submenuItems = useSelector((state) => state.submenuItems);
  console.log("hoveredMenu:", hoveredMenu);
  console.log("submenuItems:", submenuItems);
  // 선택된 메뉴의 서브메뉴 항목
  const items = submenuItems[hoveredMenu] || [];

  if (!hoveredMenu || items.length === 0) {
    return null;
  }

  return (
    <div>
      {hoveredMenu && (
        <ul
          className="sub-menus absolute top-5 left-0 p-5 bg-slate-100 shadow-lg text-gray-900 rounded-lg z-10 flex flex-row gap-4"
          // style={{ minWidth: "100%" }}
        >
          {items.map((item) => (
            <li key={item.id} className=" text-xl font-bold p-3">
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Submenu;
