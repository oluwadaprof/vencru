import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';


const CreateRoutes = () => {
  return (
    <div >
     
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </div>
  )
}

export default CreateRoutes;