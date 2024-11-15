import React, { useState } from "react";

const Submenu = () => {
  const [isHovering, setIsHovering] = useState(0);
  return (
    <div>
      <li
        onMouseOver={() => setIsHovering(1)}
        onMouseOut={() => setIsHovering(0)}
        className="relative flex justify-between items-center gap-6"
      >
        {isHovering ? (
          <ul
            className="absolute top-5 left-0 p-5 bg-slate-100 shadow-lg text-gray-900 rounded-lg z-10"
            style={{ minWidth: "200px" }}
          >
            <li className="text-xl font-bold p-3">
              <a href="#">우아한 문화</a>
            </li>
            <li className="text-xl font-bold p-3">
              <a href="#">히스토리</a>
            </li>
            <li className="text-xl font-bold p-3">
              <a href="#">지속가능경영</a>
            </li>
          </ul>
        ) : null}
      </li>
    </div>
  );
};

export default Submenu;
