import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import 'css/index.css';
import 'scss/navbar.scss';

const Navbar = () => {

    const activeLink = ({isActive})=>{
        return {
            fontWeight: isActive ?'bold' : 'normal',
            color: isActive ? 'red' : "black"
        }
    }
  return (
    <>
    {/* <span className='navbar' >Header</span> style is not working needs to be check*/}
    <nav className='primary-nav'>
        <NavLink style={activeLink} to={'/'}>Home</NavLink>
        <NavLink style={activeLink} to={'/about'} >About</NavLink>
        <NavLink style={activeLink} to={'product'} >Product</NavLink>
        <NavLink style={activeLink} to={'users'} >Users</NavLink>
        {/* relative links dont start with / instead it has its own route name only
        only absolute paths have / in its prefix */}
    </nav>
    </>
  )
}

export default Navbar;