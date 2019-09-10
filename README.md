# useinterval

> React hook for setting up an interval

[![NPM](https://img.shields.io/npm/v/useinterval.svg)](https://www.npmjs.com/package/useinterval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save useinterval
```

## Usage

```jsx
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
```

## License

MIT © [slynch13](https://github.com/slynch13)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
