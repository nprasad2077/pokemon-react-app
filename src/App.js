import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
//Components
import Home from './components/Home'

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App