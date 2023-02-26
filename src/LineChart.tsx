import Chart from 'react-apexcharts'

function LineChart() {
  return <Chart type="line" series={[{data: [1, 2, 3]}]} width={500} height={300} options={{}} />
}

export default LineChart
