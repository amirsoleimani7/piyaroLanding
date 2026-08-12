import React from "react";
import ReactApexChart from "react-apexcharts";
import "./PriceStyle.css";

const generateData = () => {
  const data = [];
  const ts2 = new Date("14 Jan 2025").getTime();

  for (let i = 0; i < 120; i++) {
    const timestamp = ts2 + i * 86400000;
    const value = Math.floor(Math.random() * 4000000) + 1000000;
    data.push([timestamp, value]);
  }
  return data;
};

const dates = generateData();

const ApexChart = () => {
  const [state] = React.useState({
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
        zoom: {
          enabled: false, // Disable zoom
        },
        toolbar: {
          show: false, // Remove toolbar completely
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
      // Remove Y-axis labels and title
      yaxis: {
        show: false, // Hide Y-axis completely
        labels: {
          show: false, // Hide Y-axis labels
        },
        title: {
          text: "", // Remove title text
        },
      },
      // Remove X-axis labels
      xaxis: {
        type: "datetime",
        labels: {
          show: false, // Hide X-axis labels (dates)
        },
        axisBorder: {
          show: false, // Hide X-axis border line
        },
        axisTicks: {
          show: false, // Hide X-axis tick marks
        },
      },
      // Remove grid lines (optional)
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false, // Remove tooltip completely
      },
    },
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div id="chart" className="w-full h-full">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height="100%"
        />
      </div>
    </div>
  );
};

export default ApexChart;