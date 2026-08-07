"use client";

import { license, LicenseType } from "../../../public/data/LicensesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Rock_3D } from "next/font/google";

export default () => {
  return (
    <div className="flex flex-col items-center mb-20 mt-auto max-md:w-[80%] max-xl:w-[90%] max-sm:w-full ">
      <div className="rounded-xl border-none px-3 py-1 transition-all duration-100 ease-in-out outline-1 cursor-pointer outline-gray-300 shadow-2xl hover:bg-main hover:shadow-xl hover:outline-main active:translate-y-0.5 hover:text-white hover:font-bold">
        <h1 className="font-yekan text-xl font-semibold">مجوزها</h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        
        slidesPerView={5}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full max-w-4xl  shadow-xl p-5 rounded-xl px-10"
      >
        {license.map((l: LicenseType, index: number) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center rounded-xl w-10 h-10 "
          >
            <div className="p-1">
              <div className="relative aspect-square overflow-hidden border-0 p-0 flex items-center justify-center">
                <img
                  src={l.URL}
                  alt={`License ${index + 1}`}
                  width={10}
                  height={10}
                  className="w-[50%] h-[50%] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
