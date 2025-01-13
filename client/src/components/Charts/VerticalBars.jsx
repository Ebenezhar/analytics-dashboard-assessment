import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required Chart.js components.
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function VerticalBarGraph({ chartData }) {
  console.log(chartData);
  

  const records = {
    labels: chartData.x_axis,
    datasets: [
      {
        label: "Vehichle Count",
        backgroundColor: [
          "#88D4FF",
          "#EFC797",
          "#BCB2F8",
          "#FFADFC",
          "#BCF485",
          "#FC9797",
          "#88D4FF",
          "#EFC797",
          "#BCB2F8",
          "#FFADFC",
          "#BCF485",
          "#FC9797",
          "#88D4FF",
          "#EFC797",
          "#BCB2F8",
          "#FFADFC",
          "#BCF485",
          "#FC9797",
          "#88D4FF",
          "#EFC797",
          "#BCB2F8",
          "#FFADFC",
          "#BCF485",
          "#FC9797",
        ],
        borderRadius: 5,
        data: chartData.y_axis,
      },
    ],
  }
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: true,
        },
      },
      y: {
        ticks: {
          stepSize: 1, // Ensure step size is defined for the y-axis.
        },
      },
    },
  };

  return (
    <Bar
      style={{
        height: "100% !important",
        maxWidth: "100% !important",
      }}
      height={350}
      width={1200}
      options={defaultOptions}
      data={records}
    />

  );
}
