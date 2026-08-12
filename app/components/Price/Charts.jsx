import React from "react";
import ReactApexChart from "react-apexcharts";
import "./PriceStyle.css";

// This demo also loads: https://apexcharts.com/samples/assets/irregular-data-series.js// Generate your own sample data instead of loading external script
const generateData = () => {
  const data = [];
  const ts2 = new Date("14 Jan 2025").getTime();

  for (let i = 0; i < 120; i++) {
    const timestamp = ts2 + i * 86400000; // add 1 day each time
    // Generate random price between 1000000 and 5000000
    const value = Math.floor(Math.random() * 4000000) + 1000000;
    data.push([timestamp, value]);
  }
  return data;
};

const dates = generateData();

const ApexChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Meridian Motors",
        data: dates,
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "قیمت لحظه‌ای ۱ گرم طلا ۱۸ عیار",
        align: "right",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return "$" + (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return "$" + (val / 1000000).toFixed(0);
          },
        },
      },
    },
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div id="chart" className="w-full h-full ">
        <ReactApexChart
          // options={state.options}
          series={state.series}
          type="area"
        />
      </div>
    </div>
  );
};

export default ApexChart;
