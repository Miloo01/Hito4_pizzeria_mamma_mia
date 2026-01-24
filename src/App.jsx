import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Componentes/Navbar'
import Home from './Pages/Home'
import Footer from './Componentes/Footer'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Pizza from './Pages/Pizza'
import NotFound from './Componentes/NotFound'
import Profile from './Componentes/Profile'
import './App.css'

import CartProvider from './context/CartContext'
import CardPizza from './Componentes/CardPizza'
import UserProvider from './context/UserContext'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'




const AppContent = () => {
  const { token } = useContext(UserContext);

  return (
    <CartProvider>
      <div className="app d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={token ? <Navigate to="/" /> : <Register />} />
            <Route path='/login' element={token ? <Navigate to="/" /> : <Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001/:id' element={<Pizza />} />
            <Route path='/profile' element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
       
    </CartProvider>
    


  )
  
}

const App = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  )
}

export default App
