import React, { useState } from 'react'
import { useInterval } from 'useinterval'

const App = () => {
  let [example, setExample] = useState(0)
  useInterval(() => {
    setExample(x => setExample(x + 1))
  }, 1000)
  return (
    <div>
      {example}
    </div>
  )
}
export default App
