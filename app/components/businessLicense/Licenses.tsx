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
      spaceBetween={6}
      loop
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full max-w-4xl  mb-20 mt-auto "
    >
      {license.map((l: LicenseType, index: number) => (
        <SwiperSlide
          key={index}
          className="basis-1/4 ml-2 bg-red-900 flex items-center justify-center rounded-2xl "
        >
          <div className="p-1">
            <div className="relative aspect-square overflow-hidden border-0 p-0 flex items-center justify-center">
              <img
                src={l.URL}
                alt={`License ${index + 1}`}
                width={50}
                height={50}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
