import { useState } from 'react'
import doki_home from './assets/doki-home.png'
import books from './assets/livros.png'
import CardPoems from './components/layout/CardPoems'
import Navbar from './components/layout/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar src={books} />
     <CardPoems src={doki_home} text='Games'/>
    </div>
  )
}

export default App
