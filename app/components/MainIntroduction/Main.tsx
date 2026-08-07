import { IoIosArrowDown } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

import "./main.css";

export default function Main() {
  return (
    <div className="w-[70%]  flex flex-col justify-between  mt-25 relative ">
      <div className="flex w-full mt-25 justify-between">
        <div className=" w-[50%] border flex flex-col gap-5">
          <h1 className="text-4xl font-bold font-yekan ">
            پیاروگلد؛ پلتفرم خرید و فروش آنلاین{" "}
            <span className="gold">طلا</span>
          </h1>
          <p className="font-yekan text-xl">
            خرید آنلاین طلا و نقره بدون اجرت و مالیات با ارائه فاکتور رسمی،
            ضمانت اصالت و امکان تحویل فیزیکی را در پیاروگلد تجربه کنید.
          </p>
          <div className="mt-20">
            <button className="flex gap-1 items-center border px-4 py-1.5 rounded-md justify-between">
              <span className="font-yekan">خرید طلا</span>
              <div className="p-1 rounded-md border rotate-90 border-gray-400 flex items-center justify-center scale-75">
                <FaArrowDown />
              </div>
            </button>
            <button className="flex gap-1 items-center border px-4 py-1.5 rounded-md justify-between">
              <span className="font-yekan">قیمت طلا</span>
              <div className="p-1 rounded-md border rotate-90 border-gray-400 flex items-center justify-center scale-75">
                <FaArrowDown />
              </div>
            </button>
          </div>
        </div>
        <video
          loop
          controls={false}
          width={400}
          height={200}
          autoPlay
          muted
          src="/vid/s5.mp4"
          className="h-fit self-center select-none "
        ></video>
      </div>

      <div className="w-[70%] border border-gray-300 h-50 self-center -translate-5 z-10 bg-white  rounded-2xl"></div>
    </div>
  );
}
