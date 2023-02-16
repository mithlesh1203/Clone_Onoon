import React, { createContext, useReducer } from 'react'
// import axios from 'axios';
import Navbar from './components/NavBar_Page/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import  Home from './components/Home'
import Login from './components/Auth/Login'
import LogOut from './components/Auth/LogOut'
import  Signup from './components/Auth/Signup'
import Product from './components/ProductPage/Product'
import {initialState, reducer } from './reducer/UseReducer'
import ProductDesription from './components/ProductPage/ProductDesription'


export const UserContext = createContext()
// const Routing =() => {
// return (
// <BrowserRouter>
// <Routes>
//       <Route path="/" element={<Home />}>
//         <Route path="/Home"  element={<Home />} />
//         <Route path="/Product" element={<Product />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/LogOut" element={<LogOut />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/ProductDesription" element={<ProductDesription />} />
//       </Route>
//       </Routes>
// </BrowserRouter>
// )
// }
function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <Navbar/>
    <Routes>
        <Route path="/Home"  element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ProductDesription" element={<ProductDesription />} />
      </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App