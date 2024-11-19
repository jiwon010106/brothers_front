import React from "react";
import myvideo from "../assets/video_test1.mp4";
import { IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const naviGate = useNavigate();
  const handleVideoClick = () => {
    naviGate("/Company");
  };

  return (
    <div className="relative cursor-pointer" onClick={handleVideoClick}>
      <video autoPlay loop muted className="w-full">
        <source src={myvideo} />
      </video>

      <div className="content absolute w-full h-full mb-10 top-0 flex flex-col justify-center items-center text-gray-50">
        <h3 className="text-[30px]">우아한형제들이 알고싶다</h3>
        <h1 className="text-[75px]">한 걸음</h1>

        <h1 className="text-[75px]">더 가까이</h1>
        <h3 className="text-[20px] flex justify-center items-center">
          서비스
          <IoIosArrowForward />
        </h3>
        <div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-[100px] mb-0"
          >
            <SwiperSlide className="">Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mt-[160px]">
        <div className="page-heading-wrap flex justify-center items-center font-semibold text-4xl mb-7">
          <h2>우아한형제들이 일하는 이야기</h2>
        </div>
        <div className="flex justify-center items-center">
          <span>평범한 사람들이 모여 비범한 성과를 만들어 내도록</span>
        </div>
      </div>
    </div>
  );
};

export default Section;
