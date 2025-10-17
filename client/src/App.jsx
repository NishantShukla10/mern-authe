import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { Toaster } from 'react-hot-toast'
// import {ToastContainer} from 'react-hot-toast'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/email-verify' element={<EmailVerify/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App
