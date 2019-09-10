import { useRef, useEffect, useState } from 'react'

let useInterval = (func, initTimeout, initialArgs) => {
  let [args, setArgs] = useState(initialArgs || [])
  let [runtimeFunc, setRuntimeFuc] = useState(() => func)
  let [timeout, changeTimeout] = useState(initTimeout)
  let lastIntervalTime = useRef()
  useEffect(() => {
    let time = lastIntervalTime.current
      ? timeout - (Date.now() - lastIntervalTime.current)
      : timeout
    let interval = setInterval(
      (...args) => {
        lastIntervalTime.current = Date.now()
        runtimeFunc(...args)
      },
      time,
      args
    )
    return () => {
      clearInterval(interval)
    }
  }, [runtimeFunc, args, timeout])
  return {
    setFunc: setRuntimeFuc,
    setArguments: setArgs,
    changeTimeout: timeout => changeTimeout(timeout)
  }
}
export { useInterval }
