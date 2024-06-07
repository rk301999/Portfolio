
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <div className='App h-screen'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
