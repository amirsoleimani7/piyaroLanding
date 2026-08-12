import React from "react";
import ReactApexChart from "react-apexcharts";
import "./PriceStyle.css";

const generateData = () => {
  const data = [];
  const ts2 = new Date("14 Jan 2025").getTime();
  
  // Starting value
  let currentValue = 1500000;

  for (let i = 0; i < 120; i++) {
    const timestamp = ts2 + i * 86400000;
    
    // Generate smoother changes (random walk with small steps)
    const change = (Math.random() - 0.5) * 80000; // Random change between -40,000 and +40,000
    currentValue = Math.max(1000000, Math.min(4000000, currentValue + change)); // Keep within bounds
    
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
        type: "area",
        stacked: false,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        fontFamily: "'IRANSans', 'Tahoma', 'Arial', sans-serif", // Add your preferred font
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
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "'IRANSans', 'Tahoma', 'Arial', sans-serif",
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
        colors: ["#FFD700"], // Gold color
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
            return "ریال " + (val / 1000000).toFixed(1) + "M";
          },
        },
        x: {
          show: true,
          format: "dd MMM yyyy",
        },
        style: {
          fontSize: "12px",
          fontFamily: "'IRANSans', 'Tahoma', 'Arial', sans-serif",
        },
      },
      stroke: {
        curve: "smooth",
        width: 3, // Increased line width for better visibility
        colors: ["#FFD700"], // Gold color for the line
        dashArray: 0, // Solid line (set to e.g., [5, 5] for dashed)
        lineCap: "round", // Rounded line endings
      },
      // Customize the current value marker at the end
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
                fontFamily: "'var(--font-lemonade)', 'Tahoma', 'Arial', sans-serif",
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
    <div className="w-full h-full flex justify-center items-center" style={{ fontFamily: "'IRANSans', 'Tahoma', 'Arial', sans-serif" }}>
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