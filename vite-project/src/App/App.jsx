import { useEffect, useState } from 'react'
import { Counter, Toggle } from '../components'

function sendWelcomeMessage() {
  console.log('I want to play a game!')
}

function App() {
  const [count, setCount] = useState(0)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    sendWelcomeMessage()
  }, [])

  useEffect(() => {
    console.log(`Count changed: ${count}`)
  }, [count])

  useEffect(() => {
    if (!accepted) {
      document.title = 'Accept the rules'
      return
    }

    document.title = `Click count: ${count}`
  }, [accepted, count])

  return (
    <>
      <Toggle accepted={accepted} onAccept={() => setAccepted((prev) => !prev)} />
      <Counter
        count={count}
        onIncrement={() => setCount((prev) => prev + 1)}
        onReset={() => setCount(0)}
        canClick={accepted}
      />
    </>
  )
}

export default App
