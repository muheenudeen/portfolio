import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Project'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
      
    </>
  )
}

export default App
