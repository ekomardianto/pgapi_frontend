import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Proptype = {
  title: string;
};
// Data contoh untuk Pie Chart
const data = [
  { name: "Asset", value: 400 },
  { name: "Modal", value: 300 },
  { name: "Kewajiban", value: 100 },
];

// Warna-warna untuk setiap bagian pie
const COLORS = ["#FF8042", "#00C49F", "#FFBB28"];

const MyPieChart = (prop: Proptype) => {
  const { title } = prop;
  return (
    <div>
      {/* Judul Chart */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%" // Posisi horizontal
            cy="50%" // Posisi vertikal
            outerRadius={150} // Ukuran radius pie
            fill="#8884d8"
            label // Menampilkan label di dalam chart
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyPieChart;
