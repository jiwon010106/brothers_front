import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Headbar = () => {
  return (
    <div className="navi-head w-full h-full border border-gray-700 border-b-2 flex items-center justify-between">
      <div className="navi p-10 font-normal text-lg">
        <div className="logo-wrapper">
          <a href="">
            <h2 className="main font-semibold text-xl">우아한 형제들</h2>
          </a>
          <span></span>
        </div>
      </div>
      <ul className="navi flex justify-between text-gray-700 items-center gap-8 font-semibold relative">
        <a href="#" className="hover:text-gray-900">
          <span>회사 소개</span>
        </a>
        <a href="#" className="hover:text-gray-900">
          <span>서비스</span>
        </a>
        <a href="#" className="hover:text-gray-900">
          <span>함께가치</span>
        </a>
        <a href="#" className="hover:text-gray-900">
          <span>뉴스룸</span>
        </a>
        <a href="#" className="hover:text-gray-900">
          <span>글꼴</span>
        </a>
        <a href="#" className=" hover:text-gray-900">
          <span>음악</span>
        </a>
      </ul>
      <ul className=" flex items-center gap-8 font-semibold text-[12px] pr-[100px] text-gray-700">
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
