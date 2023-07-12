import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const numbers =5555;
const singer = {name: 'dr. Mahafuz', job:'singer'}
const singer2 = {name:'Eva Rahman', job:'Singar'}
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>name: {2222 + numbers}</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <p>name:{singer.name} job {singer.job}</p>
        <p>name:{singer.name} job{singer.job}</p>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite  React logos to learn more
      </p>
    </>
  )
}

export default App
