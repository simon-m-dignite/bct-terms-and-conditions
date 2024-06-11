import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndConditions from './TermsAndConditions'

function App() {

  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
     <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
    </Routes>
  )
}

export default App
