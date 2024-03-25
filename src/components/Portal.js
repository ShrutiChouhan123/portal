import React from 'react'
import Login from './Login'
import Navigation from './Navigation'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Popover from './ChangeStatusPopUp'
import Calls from './Calls'
const Portal = () => {
  return (
    <>
    <Routes>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/' element={<Navigation />}></Route>
    <Route path='/calls' element={<Calls />}></Route>
    </Routes>
    </>
  )
}

export default Portal