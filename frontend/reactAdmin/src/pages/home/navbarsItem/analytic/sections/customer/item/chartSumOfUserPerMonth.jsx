import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const sumUsersRegisterInMonthData = [
    { month: "tháng 1", user_count: 20 },
    { month: "tháng 2", user_count: 35 },
    { month: "tháng 3", user_count: 15 },
    { month: "tháng 4", user_count: 40 },
    { month: "tháng 5", user_count: 20 },
    { month: "tháng 6", user_count: 25 },
    { month: "tháng 7", user_count: 50 },
    { month: "tháng 8", user_count: 90 },
    { month: "tháng 9", user_count: 67 },
    { month: "tháng 10", user_count: 34 },
    { month: "tháng 11", user_count: 12 },
    { month: "tháng 12", user_count: 56 },
  ];

    const month = sumUsersRegisterInMonthData.map((item) => item.month)
    const sum = sumUsersRegisterInMonthData.map((item) => item.user_count)

    const chartData = {
        labels: month, // Nhãn của từng bệnh viện
        datasets: [
          {
            label: 'Total of users',
            data: sum, // Dữ liệu số lượng bác sĩ
            backgroundColor: 'rgba(58, 214, 58, 0.6)',
            borderColor: 'rgb(36, 225, 67)',
            borderWidth: 1,
          },
        ],
      };
      const options = {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            padding: {
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }
        },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
          },
          title: {
            display: false,
            text: 'Number of users per month',
          },
        },
        datalabels: {
            anchor: 'end', // Đặt vị trí của số liệu
            align: 'top', // Căn chỉnh số liệu phía trên đầu cột
            color: 'black', // Màu chữ của số liệu
        },
      }


export default function SumUserInMonth(){
    return <Bar data={chartData} options={options}/>
}