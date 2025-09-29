import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import api from "../api/client";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BudgetPie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/budget").then((res) => setData(res.data));
  }, []);

  const chartData = {
    labels: data.map((d) => d.title),
    datasets: [
      {
        label: "Budget",
        data: data.map((d) => d.budget),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)"
        ],
      },
    ],
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <Pie data={chartData} />
    </div>
  );
}
