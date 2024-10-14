import './App.css'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(10)

  const increaseValue = () => {
    if (counter < 20)
      setCounter(counter + 1)
  }

  const decreaseValue = () => {
    if (counter > 0 )
      setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Counter Application using UseState Hook</h1>
      <button onClick={increaseValue}>+</button>
      <h3>{counter}</h3>
      <button onClick={decreaseValue}>-</button>
    </>
  )
}

export default App
