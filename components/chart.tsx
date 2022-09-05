import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const chartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{ top: 55, right: 20, bottom: 0, left: 0 }}
      >
        <Line name="重量(kg)" type="monotone" dataKey="weight" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  )
};

export default chartComponent;
