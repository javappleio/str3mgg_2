import React from 'react'
import './header.css'
import logo from '../assets/logostr3m.png'
import user from '../assets/user.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="Logo" className='header_logo'></img>
        <img src={user} alt="User" className='header_user'></img>
    </div>
  )
}

export default Header
