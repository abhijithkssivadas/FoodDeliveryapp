import React, { StrictMode, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Order from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/MyOrders/MyOrders'
import CodSuccess from './Pages/CodSuccess/CodSuccess'
const App = () => {

    const [showLogin,setShowLogin] = useState(false)

  return (
  <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app'>
     <StrictMode>
       <Navbar setShowLogin={setShowLogin} />
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/order' element={<Order/>} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrders/>} />
          <Route path="/cod-success" element={<CodSuccess />} />
         </Routes>
     </StrictMode>
    </div>
     <Footer />
    </>

  )
}

export default App
