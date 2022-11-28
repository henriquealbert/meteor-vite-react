import { useState } from 'react'

export const Hello = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <button onClick={increment}>Click Meeeeee</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  )
}
