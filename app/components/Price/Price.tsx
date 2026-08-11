"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import BuynSell from "./BuynSell";
import { useState } from "react";

import "./PriceStyle.css";

export default function Price() {
  return (
    <section className="w-[70%] max-md:w-[95%] rounded-md h-100 flex gap-5 max-lg:flex-col">
      {/* test change */}

      <div className="w-1/2 h-full  max-lg:w-full flex justify-center items-center rounded-md shadow-xl">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
        />
      </div>
      <BuynSell />
    </section>
  );
}
