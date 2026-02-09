import { useState } from 'react'
import { Counter, Toggle } from '../components'

function App() {
  const [count, setCount] = useState(0)
  const [accepted, setAccepted] = useState(false)

  return (
    <>
      <Toggle accepted={accepted} onAccept={() => setAccepted((prev) => !prev)} />
      <Counter
        count={count}
        onIncrement={() => setCount(count + 1)}
        onReset={() => setCount(0)}
        canClick={accepted}
      />
    </>
  )
}

export default App
