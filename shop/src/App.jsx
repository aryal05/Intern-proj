
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Nav from './components/Nav'
import Journal from './home/Journal'
import { Brand } from './components/Brand'
import Instagram from './components/Instagram'
// import Shipping from './home/Shipping'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
// import Shipping from './home/Shipping'



function App() {
 
  return (
    <>
    
    <NavBar/>
    <Nav/>
    <Outlet />
    <Journal/>
    <Brand/>
    <Instagram/>
    {/* <Shipping/> */}
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default App
