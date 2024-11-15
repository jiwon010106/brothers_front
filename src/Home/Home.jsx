import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Submenu from "../component/Submenu";

const Headbar = () => {
  const [isHovering, setIsHovering] = useState(0);
  return (
    <div className="navi-head w-full h-full border border-gray-700 border-b-2 flex items-center justify-between">
      <div className="navi p-10 font-normal text-lg">
        <div className="logo-wrapper">
          <a href="">
            <h2 className="main font-semibold text-xl">우아한 형제들</h2>
          </a>
        </div>
      </div>
      <ul className="navi flex justify-between text-gray-700 items-center gap-8 font-semibold">
        <li
          onMouseOver={() => setIsHovering(1)}
          onMouseOut={() => setIsHovering(0)}
          className="relative flex justify-between items-center gap-6"
        >
          <a href="#" className="hover:text-gray-900">
            회사 소개
          </a>
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
        <Submenu>
          <a href="#" className="hover:text-gray-900">
            서비스
          </a>

          <a href="#" className="hover:text-gray-900">
            함께가치
          </a>
          <a href="#" className="hover:text-gray-900">
            뉴스룸
          </a>
          <a href="#" className="hover:text-gray-900">
            글꼴
          </a>
          <a href="#" className="hover:text-gray-900">
            음악
          </a>
        </Submenu>
      </ul>
      <ul className="flex items-center gap-8 font-semibold text-[12px] pr-[100px] text-gray-700">
        <a
          href="#"
          className="flex justify-center items-center hover:text-gray-900"
        >
          <li>배민다움</li>
          <MdArrowOutward className="text-[12px]" />
        </a>
        <a
          href="#"
          className="flex justify-center items-center hover:text-gray-900"
        >
          <li>인재 영입</li>
          <MdArrowOutward className="text-[12px]" />
        </a>
        <li>한 | A</li>
      </ul>
    </div>
  );
};

export default Headbar;
