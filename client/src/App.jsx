import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sidebar from './components/SideBar'
import DashBoard from './pages/DashBoard'
import Entities from './pages/Entities'
import MarketPlace from './pages/MarketPlace'
import Calender from './pages/Calender'
import Profile from './pages/Profile'
import NotificationPage from './pages/Notification'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <div className='totalContainer'>
        <Sidebar/>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/entities' element={<Entities/>}/>
        <Route path='/market-place' element={<MarketPlace/>}/>
        <Route path='/notification' element={<NotificationPage/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<MarketPlace/>}/>
      </Routes>
      </div>
     </BrowserRouter>
    </>
  )
}

export default App
