import './doctor.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const sampleData = [
    { hospital: "Hospital A", doctor_count: 20 },
    { hospital: "Hospital B", doctor_count: 35 },
    { hospital: "Hospital C", doctor_count: 15 },
    { hospital: "Hospital D", doctor_count: 40 },
  ];

  
export default function Doctor() {

    const labels = sampleData.map((item) => item.hospital);
    const data = sampleData.map((item) => item.doctor_count);

    const chartData = {
        labels: labels, // Nhãn của từng bệnh viện
        datasets: [
          {
            label: 'Number of Doctors',
            data: data, // Dữ liệu số lượng bác sĩ
            backgroundColor: 'rgba(0, 184, 74, 0.6)',
            borderColor: 'rgba(0, 184, 74, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout:{
          padding:{
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
          },
        },
      };
    return(
        <>
          <div className='chart-container'>
              <h3>Doctors</h3>
              <Bar data={chartData} options={options} />
          </div>
        </>
    )
}