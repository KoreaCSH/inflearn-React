import React from 'react'
import HookExam from './components/HookExam'

function App() {
  // 자식 요소가 re-rendering 된다고 해서 부모 요소도 re-rendering 되는 것은 아니다.
  console.log("rendering")
 return (
  <>
    <HookExam />  
  </>
 )
}

export default App
