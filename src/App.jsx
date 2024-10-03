import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import "./App.css"
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Sell from './pages/Sell'


const App = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<HomePage />}  />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element ={<Register />} />
        <Route path='/profile' element ={<Profile />} />
        <Route path='/sell' element={<Sell />} />
      </Routes>
    </div>
  )
}

export default App
