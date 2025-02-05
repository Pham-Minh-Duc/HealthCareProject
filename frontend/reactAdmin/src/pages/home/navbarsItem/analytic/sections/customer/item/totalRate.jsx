import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần cần thiết
ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ["1 sao", "2 sao", "3 sao", "4 sao", "5 sao"];
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC300"];
const values = [120, 110, 80, 100, 90]

// Dữ liệu biểu đồ
const data = {
    labels: labels,
    datasets: [
      {
        label: "Dân số",
        data: values, // Giá trị từng quận
        backgroundColor: colors,
        borderColor: ["#ffffff"],
        borderWidth: 2,
      },
    ],
  };


// Cấu hình tùy chỉnh
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

const PieChartComponent = () => {
    return <>
            <div style={{ width: "300px", marginTop: "-40px", marginLeft: "20px"}}>
                <Pie data={data} options={options} />
            </div>
           </>
  };
  
  export default PieChartComponent;