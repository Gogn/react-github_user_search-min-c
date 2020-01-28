import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className="navbar-brand">
        GitHub: Поиск пользователей
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink exact to="/" className='nav-link'>Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about" className='nav-link'>Информация</NavLink>
        </li>
      </ul>
    </nav>
)