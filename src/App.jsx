
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'

function App() {
 

  return (
    <>
    <Header />

    <Routes>
      <Route path='/'  element={<Landingpage />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch' element={<Watchhistory />}/>
    </Routes>

     
     <Footer />
    </>
  )
}

export default App
