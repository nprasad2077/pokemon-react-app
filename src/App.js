import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import { useState } from 'react';
//Components
import Home from './components/Home'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  const [input, setInput] = useState('');
  const [form, setForm] = useState('');

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    setForm(input)
    console.log(form);
  }




  return (
    <div>
      <Header />
      {/* <Search handleChange={handleChange} handleSubmit={handleSubmit} input={input} setInput={setInput} setForm={setForm} /> */}
      <Routes>
        <Route path='/' element={<Search handleChange={handleChange} handleSubmit={handleSubmit} input={input} setInput={setInput} setForm={setForm} />} />
      </Routes>
    </div>
  )
}

export default App