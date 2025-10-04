import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Another from './pages/Another';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/another" element={<Another />} />
    </Routes>
  )
}

export default App
