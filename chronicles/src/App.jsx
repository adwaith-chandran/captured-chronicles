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
    <div className='one'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus autem facilis, consequatur illo blanditiis, laudantium consectetur magnam quibusdam nisi aperiam, sunt quae ducimus. Deleniti, reiciendis! A quaerat cumque accusamus.</div>
    <div className='two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel, quo doloremque id dignissimos, necessitatibus nisi maiores hic nobis explicabo laboriosam sint officiis! Dolore totam vel aspernatur sint excepturi harum?</div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident animi ea neque error tempore similique quaerat, vitae dolorum excepturi velit cumque magni eveniet enim nulla debitis quibusdam soluta ullam?</p>
    
    </div>
  )
}

export default App