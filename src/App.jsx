import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import './App.css'


// Component


// Pages
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/home'
import Navbar from './component/Navbar'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
