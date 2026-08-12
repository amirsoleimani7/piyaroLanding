"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import BuynSell from "./BuynSell";
import ApexChart from "./Charts";
import "./PriceStyle.css";

export default function Price() {
  return (
    <section className="mt-10 w-[70%] h-100 max-md:w-[95%]  rounded-md  flex gap-5 max-lg:flex-col max-lg:h-auto">
      <ApexChart />
      <BuynSell />
    </section>
  );
}
