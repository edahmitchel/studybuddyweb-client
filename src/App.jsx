import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/home';
import { Navbar } from './assets/components/other-components/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import "./index.css"
function App() {
 
  return (
    <>
     <div className='body'>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
         </Routes>
      </Router>
     </div>
       
     
    </>
  )
}

export default App
