import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/signin">Cadastrar</Link>
        <Link to="/signup">Entrar</Link>

    </nav>
  )
}

export default Navbar