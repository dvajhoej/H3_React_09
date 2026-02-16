
import { useState } from 'react'
import Counter from '../../components/Counter/Counter'

function Clicker() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h2>KLIK SPIL</h2>
      <Counter
        count={count}
        onIncrement={() => setCount((prev) => prev + 1)}
        onReset={() => setCount(0)}
        canClick={true}
      />
    </section>
  )
}

export default Clicker
