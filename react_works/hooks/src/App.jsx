import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='app'>
        <h2>상태 관리 실습</h2>
        <Counter/>
      </section>

      
    </>
  )
}

export default App
