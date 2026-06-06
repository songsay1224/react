import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import Car from './components/car'
import Drink from './components/Drink'
import Drink2 from './components/Drink2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='app'>
        <h2>상태 관리 실습</h2>
        {/* <Counter/> */}
        {/* <Car/> */}
        {/* <Drink /> */}
        <Drink2 />
      </section>

    </>
  )
}

export default App
