import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { NavBar } from '../../Components/Navbar'
import { Register } from '../Register/Register'
import { Login } from '../Login/Login'
import { Capsules } from '../Capsule/Capsules'
const MainRoutes = () => {
  return (
    <>
    <NavBar/>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/capsule" element={<Capsules/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes