import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';


function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={<Login/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default Home;