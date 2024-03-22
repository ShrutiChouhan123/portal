import React from 'react'
import Login from './Login'
import Navigation from './Navigation'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
const Portal = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/HomePage' element={<Navigation />}></Route>
    </Routes>
    </>
  )
}

export default Portal