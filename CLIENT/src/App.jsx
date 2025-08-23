import React from 'react'
import { Route, Routes } from "react-router-dom"
import About from './pages/About'
import Home from './pages/Home'
import Operations from './pages/Operations'
import Header from './Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='ops' element={<Operations/>} />
      </Routes>
    </>
  )
}

export default App