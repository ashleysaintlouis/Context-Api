import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/contact">Contato</NavLink>
        <NavLink to="/signin">Cadastrar</NavLink>
        <NavLink to="/signup">Entrar</NavLink>

    </nav>
  )
}

export default Navbar