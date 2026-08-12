import React from "react";
import ReactApexChart from "react-apexcharts";
import fa from "apexcharts/dist/locales/fa.json";
import "./PriceStyle.css";

const generateData = () => {
  const data = [];
  const ts2 = new Date("14 Jan 2025").getTime();

  // Starting value
  let currentValue = 1500000;

  for (let i = 0; i < 120; i++) {
    const timestamp = ts2 + i * 86400000;

    // Generate smoother changes (random walk with small steps)
    const change = (Math.random() - 0.5) * 80000;
    currentValue = Math.max(1000000, Math.min(4000000, currentValue + change));

    // Round to nearest 1000 for cleaner numbers
    const roundedValue = Math.round(currentValue / 1000) * 1000;
    data.push([timestamp, roundedValue]);
  }
  return data;
};

const dates = generateData();

const ApexChart = () => {
  const [state] = React.useState({
    series: [
      {
        name: "قیمت طلا",
        data: dates,
      },
    ],
    options: {
      chart: {
        locales: [fa],
        defaultLocale: "fa",
        animations: { easing: "bounce" },
        type: "area",
        stacked: false,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        fontFamily: "var(--font-yekan), 'IRANSans', 'Tahoma', 'Arial', sans-serif",
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
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: "var(--font-yekan), 'IRANSans', 'Tahoma', 'Arial', sans-serif",
          color: "#263238",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 95, 100],
        },
        colors: ["#FFD700"],
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        title: {
          text: "",
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        title: {
          text: "",
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: true,
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(1) + " میلیون ریال";
          },
        },
        x: {
          show: true,
          // Custom formatter for Persian date
          formatter: function(val) {
            const date = new Date(val);
            const persianMonths = [
              'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
              'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
            ];
            const day = date.getDate();
            const month = persianMonths[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
          },
        },
        style: {
          fontSize: "13px",
        },
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#FFD700"],
        dashArray: 0,
        lineCap: "round",
      },
      annotations: {
        points: [
          {
            x: dates[dates.length - 1][0],
            y: dates[dates.length - 1][1],
            marker: {
              size: 8,
              fillColor: "#FFD700",
              strokeColor: "#B8860B",
              strokeWidth: 3,
              radius: 12,
            },
            label: {
              text: (dates[dates.length - 1][1] / 1000000).toFixed(1) + "M",
              offsetY: -20,
              offsetX: 0,
              style: {
                fontSize: "14px",
                fontWeight: "bold",
                color: "#263238",
                background: "#FFFFFF",
                padding: {
                  left: 10,
                  right: 10,
                  top: 5,
                  bottom: 5,
                },
                border: {
                  color: "#FFD700",
                  width: 2,
                },
              },
            },
          },
        ],
      },
    },
  });

  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{ fontFamily: "var(--font-yekan), 'IRANSans', 'Tahoma', 'Arial', sans-serif" }}
    >
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