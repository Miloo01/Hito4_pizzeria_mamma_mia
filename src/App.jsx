import Navbar from './Componentes/Navbar'
import Home from './Componentes/Home'
import Footer from './Componentes/Footer'
import Register from './Componentes/Register'
import Login from './Componentes/Login'
import Cart from './Componentes/Cart'
import Pizza from './Componentes/Pizza'
import './App.css'




const App = () =>  {
 

  return (
    <div className="app">
      <Navbar />

      <main className='container p-0'  >
       {/*<Home /> */ /*hito 4 */}
       {<Pizza/> /* hito 4 */}
       {/*<Register /> {/* hito2 */}
       {/*<Login /> */ /* hito2 */}
         
      </main>
      {/*<Cart />*/ /* hito3 */}
      <Footer />
    </div>
  )
}

export default App
