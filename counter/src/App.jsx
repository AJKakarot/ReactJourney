import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* function App() {
 const [count, setCount] = useState(10)
  return (
    <>
   <h1>Counter</h1>
       <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)
      }>Add value</button>
      <br></br><br></br>
      <button onClick={() => setCount(count -1)}>Subtract value</button>
    </>



  )
}*/


function App() {
  const [count, setCount] = useState(10)

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1)
    }
  }

  const subValue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>

      <button onClick={addValue}>Add value</button>
      <br></br><br></br>
      <button onClick={subValue}>Subtract value</button>
    </>



  )


}

export default App
