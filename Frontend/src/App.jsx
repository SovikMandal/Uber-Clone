import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin.jsx'
import { UserDataContext } from './context/Context.jsx'
import Home from './pages/Home.jsx'
import UserProtectWrapper from './util/UserProtectWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainLogout from './pages/CaptainLogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectWrapper from './util/CaptainProtectWrapper.jsx'
import TrackRiding from './pages/TrackRiding.jsx'

const App = () => {

  
  return (
    <div>
       <Routes>
            <Route path='/' element={<Start/>} />
            <Route path='/signup' element={<UserSignup/>} />
            <Route path='/login' element={<UserLogin/>} />
            <Route path='/captain-login' element={<CaptainLogin/>} />
            <Route path='/captain-signup' element={<CaptainSignup/>} />
            <Route path='/home' element = { 
              <UserProtectWrapper>
                <Home/>
              </UserProtectWrapper>} 
            />
            <Route path='/user-logout' element = { 
              <UserProtectWrapper>
                <UserLogout/>
              </UserProtectWrapper>} 
            />
            <Route path='/captain-home' element = { 
              <CaptainProtectWrapper>
                <CaptainHome/>
              </CaptainProtectWrapper>} 
            />
            <Route path='/captain-logout' element = { 
              <CaptainProtectWrapper>
                <CaptainLogout/>
              </CaptainProtectWrapper>} 
            />
            <Route path='/track-riding' element={<TrackRiding />} />
       </Routes>
    </div>
  )
}

export default App
