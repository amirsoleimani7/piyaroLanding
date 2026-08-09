import { FaArrowDown } from "react-icons/fa6";

import "./main.css";

export default function Main() {
  return (
    <div className="w-[70%]  flex flex-col justify-between  mt-25 relative ">
      <div className="flex w-full mt-25 justify-between">
        <div className=" w-[50%]  flex flex-col gap-5">
          <h1 className="text-4xl font-bold font-yekan ">
            پیاروگلد؛ پلتفرم خرید و فروش آنلاین{" "}
            <span className="gold">طلا</span>
          </h1>
          <p className="font-yekan text-lg max-xl:text-base max-md:text-sm">
            خرید آنلاین طلا و نقره بدون اجرت و مالیات با ارائه فاکتور رسمی،
            ضمانت اصالت و امکان تحویل فیزیکی را در پیاروگلد تجربه کنید.
          </p>

          <div className="mt-20 flex gap-2">
            <button className="flex gap-2 items-center  px-4 py-1.5 rounded-md justify-between bg-main text-white font-bold duration-200 ease-in-out transition-all hover:bg-main-hover cursor-pointer group">
              <span className="font-yekan group-hover:font-bold">خرید طلا</span>
              <div className="p-1 rounded-md border rotate-90 border-white flex items-center justify-center scale-75">
                <FaArrowDown />
              </div>
            </button>

            <button className="flex gap-2 items-center bg-main-hover-3 px-5 py-2 rounded-md justify-between duration-200 ease-in-out transition-all hover:bg-main-hover-5 cursor-pointer group">
              <span className="font-yekan text-main-hover-4 group-hover:font-bold">
                قیمت طلا
              </span>
              <div className="p-1 rounded-md border rotate-90 border-main-hover-4 flex items-center justify-center scale-75 ">
                <FaArrowDown className="text-main-hover-4" />
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

      <div className="w-[95%]  border-gray-300 h-30  self-center -translate-5 z-10 bg-gray-100  rounded-2xl">

      </div>
    </div>
  );
}
