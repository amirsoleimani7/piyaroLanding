"use client";
import { FaArrowLeft } from "react-icons/fa";
// import { BorderBeam } from "../lightswind/border-beam";
import { BorderBeam } from "@/components/ui/border-beam";

import "./goldenChance.css";

export default function GoldenChance() {
  return (
    <div className="relative  mb-10 max-w-[80%] max-md:max-w-[90%] shadow-xl rounded-2xl flex justify-between items-center px-10 py-5  max-sm:flex-col overflow-hidden bg-gray-50">
      <BorderBeam
        size={300}
        duration={5}
        colorFrom="#ffbe00"
        colorTo="#ffd200"
        borderWidth={2}
      />
      
      <div className="w-[70%] max-md:w-full">
        <h1 className="font-yekan font-bold text-5xl text-main"><span className="text-gray-400">فرصت</span> طلایی</h1>
        <p className="font-yekan mt-4">
          ما با تکیه بر سال‌ها تجربه و اعتبار این مجموعه در بازار طلا و سرمایه،
          بستری را فراهم کرده‌ایم تا سرمایه‌گذاری در طلا برای همه آسان، شفاف و
          امن باشد.
        </p>
      </div>

      <button className="relative px-5 py-3 flex items-center justify-center shadow-sm outline-1 outline-gray-200 rounded-2xl group cursor-pointer transition-all duration-50 ease-in-out hover:bg-main hover:shadow-xl hover:outline-main active:translate-y-0.5 hover:text-white hover:font-bold max-md:mt-10">
        <span className="relative font-yekan">ثبت‌نام </span>
      </button>
    </div>
  );
}
