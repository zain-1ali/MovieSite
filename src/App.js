import React from 'react'
import Home from './Home'

import SingleMovie from './SingleMovie';
import Error from './Error'
import { Routes , Route} from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='movie/:id' element ={<SingleMovie/>}/>
      <Route path='*' element ={<Error/>}/>
    </Routes>
    {/*<Movies/> 
    <Search/> 
  <SingleMovie/>*/}
    </>
  )
}

export default App
