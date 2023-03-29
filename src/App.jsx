import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'
function App() {

  return (
    <div>
      <div className="className='header m-auto mb-3'">
        <Header></Header>
      </div>
      <div className='main row'>
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  )
}

export default App
