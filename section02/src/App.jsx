import { useState, useEffect, useRef } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'

function App() {

  const isMount = useRef(false);

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count : ${count} / input : ${input}`)
  }, [count, input]);

  const onClickBtn = (value) => {
    setCount(count + value);
  }

  // 컴포넌트 라이프 사이클 : Mount -> Update(re-rendering) -> unMount
  // 1. Mount
  useEffect(() => {
    console.log("Mount")
  }, [])

  // 2. Update - isMount 를 둠으로써 처음 Mount 할 때에는 Update 가 호출되지 않는다.
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update"); 
  })

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
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  )
}

export default App
