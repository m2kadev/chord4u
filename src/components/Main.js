import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import MusicCategories from '../pages/MusicCategories'
import Artists from '../pages/Artists'

const Main = () => {
  return (
    <div className="c4u-main-wrapper">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music-categories" element={<MusicCategories />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
    </div>
  )
}

export default Main