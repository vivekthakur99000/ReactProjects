
import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  

  return (
    <>

    <div>
      <h1>Counter</h1>
      <div className="counter-div">
      <button onClick={count > 0 ? () => setCount(count - 1) : 0} >-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
     
    </>
  )
}

export default App
