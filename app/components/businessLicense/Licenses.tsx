"use client";

import { license, LicenseType } from "../../../public/data/LicensesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={5}
      loop
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full max-w-4xl  mb-20 mt-auto shadow-2xl p-5 rounded-2xl"
    >
      {license.map((l: LicenseType, index: number) => (
        <SwiperSlide
          key={index}
          className="flex items-center justify-center rounded-2xl w-10 h-10 bg-red-700"
        >
          <div className="p-1">
            <div className="relative aspect-square overflow-hidden border-0 p-0 flex items-center justify-center">
              <img
                src={l.URL}
                alt={`License ${index + 1}`}
                width={10}
                height={10}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
