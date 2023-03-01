import React from 'react'
import { NavLink } from 'react-router-dom'
import MainLogo from './MainLogo'
import SearchForm from './SearchForm'

const Navbar = () => {
  return (
    <div className='c4u-navbar-wrapper'>
        <MainLogo logoClass="c4u-main-logo" />
        <SearchForm />
        <ul className='c4u-nav-link'>
            <li>
                <NavLink to='/music-categories' className={({ isActive }) =>
                    isActive ? "nav-active" : undefined
                }>
                    Music Categories
                </NavLink>
            </li>
            <li>
                <NavLink to='/artists' className={({ isActive }) =>
                    isActive ? "nav-active" : undefined
                }>
                    Artists
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({ isActive }) =>
                    isActive ? "nav-active" : undefined
                }>
                    About
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar