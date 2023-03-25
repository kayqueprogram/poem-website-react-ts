import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import books from './assets/livros.png'
import Navbar from './components/layout/Navbar'

import './App.css'
import PoemGames from './components/pages/PoemGames';
import CardPerson from './components/pages/CardPerson';
import NatsukiDoki from './components/pages/personsArea/NatsukiDoki';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar src={books} />
      
        <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/games' element={<PoemGames />} />
        <Route path='/cardPerson' element={<CardPerson />} />
        <Route path='/natsukiDoki' element={<NatsukiDoki />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
