"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import BuynSell from "./BuynSell";
import ApexChart from "./Charts";

import "./PriceStyle.css";

export default function Price() {
  return (
    <section className="w-[70%] max-md:w-[95%] rounded-md h-100 flex gap-5 max-lg:flex-col">
      {/* test change */}

      <div className="w-1/2 h-full  max-lg:w-full flex justify-center items-center rounded-md shadow-md">
      <ApexChart/>
      </div>
      <BuynSell />
    </section>
  );
}
