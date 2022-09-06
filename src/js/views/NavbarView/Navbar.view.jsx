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
    </nav>
    </>
  )
}

export default Navbar;