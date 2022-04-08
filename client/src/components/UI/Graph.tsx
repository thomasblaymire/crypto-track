import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const dataa = [
  {
    name: 'Page A',

    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',

    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',

    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',

    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',

    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',

    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    pv: 4300,
    amt: 2100,
  },
];

interface GraphInterface {
  className?: string;
  data?: any;
}

export const Graph = ({ className, data }: GraphInterface): JSX.Element => {
  console.log('TOM data in line graph', data);

  // const dataFormatted = () =>
  //   data &&
  //   data.map(x => {
  //     console.log('TOM price', x[0]);
  //   });

  const dataFormatted = data && data.map(x => ({ pv: x[0] }));

  // dataFormatted();

  return (
    <LineChart
      className={className}
      width={930}
      height={450}
      data={dataFormatted}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        strokeWidth={5}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
