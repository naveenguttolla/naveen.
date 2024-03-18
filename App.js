import React from 'react'
 
import Fetching from './TheMealDB/Blini pancakes '
import Nav from './TheMealDB/Navbar'
import Home from './TheMealDB/Home'
import Foot from './TheMealDB/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    
<Router>
  <Nav/>
  <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/Fetching' element={<Fetching/>}></Route>
    


  </Routes>
  <Foot/>
</Router>

    </>
  )
}

export default App