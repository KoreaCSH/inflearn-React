import { useState, useEffect } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count : ${count} / input : ${input}`)
  }, [count, input]);

  const onClickBtn = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simpe Counter</h1>
      <section>
        <input 
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}/>
      </section>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  )
}

export default App
