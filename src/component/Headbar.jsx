import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setHoveredMenu, resetHoveredMenu } from "../redux/slices/menuSlice";

import { Link } from "react-router-dom";
import Submenu from "./Submenu";

const Headbar = () => {
  const dispatch = useDispatch();
  // const subList = useSelector((state) => state.submenuItems);
  // console.log(subList.service);

  const handleMouseEnter = (menu) => {
    dispatch(setHoveredMenu(menu));
  };

  const handleMouseLeave = () => {
    dispatch(resetHoveredMenu());
  };
  return (
    <div className="navi-head w-full h-full border border-gray-700 border-b-2 flex items-center justify-between">
      <div className="navi p-10 font-normal text-lg">
        <div className="logo-wrapper">
          <Link to="/">
            <h2 className="main font-semibold text-xl">우아한 형제들</h2>
          </Link>
        </div>
      </div>
      <ul className="navi flex justify-between text-gray-700 items-center gap-8 font-semibold">
        <li
          onMouseEnter={() => handleMouseEnter("company")}
          onMouseLeave={handleMouseLeave}
          className=" relative"
        >
          <Link to="/Company" className="hover:text-gray-900">
            회사 소개
          </Link>

          <Submenu />
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("service")}
          onMouseLeave={handleMouseLeave}
          className="relative "
        >
          <a href="#" className="hover:text-gray-900">
            서비스
          </a>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("together")}
          onMouseLeave={handleMouseLeave}
          className="relative "
        >
          <a href="#" className="hover:text-gray-900">
            함께가치
          </a>
          <Submenu />
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("news")}
          onMouseLeave={handleMouseLeave}
          className="relative "
        >
          <a href="#" className="hover:text-gray-900">
            뉴스룸
          </a>
          <Submenu />
        </li>
        <a href="#" className="hover:text-gray-900">
          글꼴
        </a>
        <a href="#" className="hover:text-gray-900">
          음악
        </a>
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
