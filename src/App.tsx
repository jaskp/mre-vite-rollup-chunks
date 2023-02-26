import {lazy, Suspense, useState} from 'react'

const LazyLineChart = lazy(() => import('./LineChart'))

function App() {
  const [showChart, setShowChart] = useState(false)

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <button type="button" onClick={() => setShowChart((prev) => !prev)}>Toggle chart</button>
      <Suspense>
        {showChart && <LazyLineChart />}
      </Suspense>
    </div>
  )
}

export default App
