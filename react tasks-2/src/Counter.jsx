import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const Plus = () => {
    setCount(count + 1)
  }

  const Minus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const Reset = () => {
    setCount(0)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Plus}>+</button>
      <button onClick={Minus}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter