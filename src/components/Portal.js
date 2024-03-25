import React from 'react'
import Login from './Login'
import Navigation from './Navigation'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Popover from './ChangeStatusPopUp'
import Calls from './Calls'
import Test from './Test'
import ProjectUpdates from './ProjectUpdates'
import Daily_Status from './Daily_Status'
import SendDailyStatus from './SendDailyStatus'

const Portal = () => {
  return (
    <>
    <Routes>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/' element={<Navigation />}></Route>
    <Route path='/calls' element={<Calls />}></Route>
    <Route path='/tests' element={<Test />}></Route>
    <Route path='/project-updates' element={<ProjectUpdates />}></Route>
    <Route path='/daily-status' element={<Daily_Status />}></Route>
    <Route path='/send-status' element={<SendDailyStatus />}></Route>
    </Routes>
    </>
  )
}

export default Portal