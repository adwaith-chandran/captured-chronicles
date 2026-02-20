import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import Admin from './components/Admin'
import Contact from './components/Contact'


function App() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/contact'element={<Contact/>}/> 
    </Routes>
    <Footer/>
    </div>
  )
}

export default App