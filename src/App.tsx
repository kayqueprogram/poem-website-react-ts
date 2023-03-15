import { useState } from 'react'
import doki_home from './assets/doki-home.png'
import CardPoems from './components/layout/CardPoems'
import Navbar from './components/layout/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
     <CardPoems src={doki_home} text='Games'/>
    </div>
  )
}

export default App
