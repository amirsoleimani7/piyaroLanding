"use client";

import { useState } from "react";

export default function BuynSell() {
  const [sellOrBuy, setSellOrBuy] = useState<"buy" | "sell">("buy");

  return (
    <div className="w-1/2 h-full  max-lg:w-full flex flex-col">
      <div className="w-full h-10 flex justify-between gap-4 mb-5 ">
        <button
          className={`w-1/2 font-yekan font-bold p-2  rounded-md ease-in-out duraion-200 transition-all cursor-pointer border border-gray-200  hover:border-main-hover ${sellOrBuy === "buy" ? "bg-main-select  border-main-hover" : ""}`}
          onClick={() => {
            setSellOrBuy("buy");
          }}
        >
          خرید
        </button>
        <button
          className={`w-1/2 font-yekan font-bold  p-2  rounded-md ease-in-out duraion-200 transition-all cursor-pointer border border-gray-200   hover:border-main-select-2-border ${sellOrBuy === "sell" ? "bg-main-select-2 border-main-select-2-border" : ""}`}
          onClick={() => {
            setSellOrBuy("sell");
          }}
        >
          فروش
        </button>
      </div>

      <h1 className="font-yekan text-2xl font-bold mb-1">
        با تحلیل بازار طلا، هوشمندانه معامله کنید
      </h1>
      <p className="font-yekan text-lg">
        با رصد لحظه‌ای قیمت طلا، همیشه یک قدم جلوتر از بازار باشید؛ هر تغییر را
        به فرصتی تبدیل کنید و با تصمیم‌های آگاهانه، آینده‌ای مطمئن و طلایی برای
        خود بسازید.
      </p>

      <div className="mt-auto mb-0 w-full ">
        <div> {}</div>
        <div className="relative">
          <label htmlFor="price" className="font-yekan font-bold text-sm ">
            مبلغ پرداختی
          </label>
          <input
            type="text"
            inputMode="numeric"
            id="price"
            autoComplete="off"
            placeholder="مبلغ مورد نظر را وارد کنید"
            maxLength={30}
            pattern="[0-9]*"
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              e.target.value = value;
            }}
            className="w-full outline-gray-300 outline border-none rounded-md h-10 px-3 font-yekan ease-in-out transition-all duration-200 mt-1"
          />
          <div className="absolute h-6 left-3 top-[55%] flex z-10 gap-2 ">
            <div className="h-full  border-r  border-gray-300"></div>
            <span className="font-yekan text-gray-500">تومان</span>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-0 w-full ">
        <div> {}</div>
        <div className="relative">
          <label htmlFor="price" className="font-yekan font-bold text-sm ">
            مقدار{" "}
          </label>
          <input
            type="text"
            inputMode="numeric"
            id="price"
            placeholder="وزن "
            maxLength={30}
            pattern="[0-9]*"
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              e.target.value = value;
            }}
            className="w-full outline-gray-300 outline border-none rounded-md h-10 px-3 font-yekan ease-in-out transition-all duration-200 mt-1"
          />
          <div className="absolute h-6 left-3 top-[55%] flex z-10 gap-2 ">
            <div className="h-full  border-r  border-gray-300"></div>
            <span className="font-yekan text-gray-500">گرم</span>
          </div>
        </div>
      </div>
      
      <button className="w-full h-10 bg-main-button-hover  hover:bg-main-button border-gray-200 cursor-pointer border rounded-md font-yekan font-semibold mt-2  hover:bg- ease-in-out duration-200 transition-all ">
        خرید آنلاین طا
      </button>
    </div>
  );
}
