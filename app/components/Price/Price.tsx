"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import { useState } from "react";

export default function Price() {
  const [sellOrBuy, setSellOrBuy] = useState<"buy" | "sell">("buy");

  return (
    <section className="w-[70%] max-md:w-[95%] rounded-md h-100 flex gap-5 max-lg:flex-col">
      {/* test change */}
      <div className="w-1/2 h-full  max-lg:w-full flex justify-center items-center rounded-md shadow-xl">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
        />
      </div>
      <div className="w-1/2 h-full  max-lg:w-full">
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
        <h1 className="font-yekan text-2xl font-bold mb-1">با تحلیل بازار طلا، هوشمندانه معامله کنید</h1>
        <p className="font-yekan text-lg">
          با رصد لحظه‌ای قیمت طلا، همیشه یک قدم جلوتر از بازار باشید؛ هر تغییر
          را به فرصتی تبدیل کنید و با تصمیم‌های آگاهانه، آینده‌ای مطمئن و طلایی
          برای خود بسازید.
        </p>
      </div>
    </section>
  );
}
