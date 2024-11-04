import React from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navi from './components/Navi'
export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/navi' element={<Navi/>}></Route>
      </Routes>
  )
}
