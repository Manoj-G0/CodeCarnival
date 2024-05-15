import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import News from './News'
import Coding from './Coding'
import Gallery from './Gallery'
import Regsiter from './Regsiter'
import Questions from './Questions'

const Main = () => {
  return (
   <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/coding' element={<Coding/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/register' element={<Regsiter/>}/>
            <Route path='/questions' element={<Questions/>}/>
            
        </Routes>
   </>
  )
}

export default Main
