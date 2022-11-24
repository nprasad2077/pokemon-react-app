import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
//Components
import Home from './components/Home'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  return (

    
    <div>
      <Header />
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App