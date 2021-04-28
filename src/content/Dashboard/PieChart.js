import React from 'react'
import { PieChart } from '@carbon/charts-react'

const data = [
  {
    group: 'One',
    value: 20000,
  },
  {
    group: 'Two',
    value: 65000,
  },
  {
    group: 'Three',
    value: 75000,
  },
  {
    group: 'Four',
    value: 1200,
  },
]

const options = {
  title: 'Pie',
  resizable: true,
  height: '400px',
  color: {
    scale: {
      One: 'hotpink',
      Two: 'lime',
      Three: 'cyan',
      Four: '#ccc',
    },
  },
}

const MyPieChart = () => {
  return <PieChart data={data} options={options} />
}

export default MyPieChart
