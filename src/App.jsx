import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import './App.css'


// Component
import Navbar from './component/Navbar'

// CounterContext
import { CounterContextProvider } from './context/CounterContext'


// Pages
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Products from './pages/products/Products'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { TitleColorContextProvider } from './context/TitleColorContext'

function App() {


  return (
    <>
     
      <BrowserRouter>
        <CounterContextProvider>
        <TitleColorContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        </TitleColorContextProvider>
        </CounterContextProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
