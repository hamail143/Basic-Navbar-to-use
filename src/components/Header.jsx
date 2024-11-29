/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-slate-600 sticky top-0 flex flex-row z-[20] mx-auto w-full items-center justify-between border-b border-gray-500 p-8'> 
    <Logo/> 
    <Navbar/>
    
    </header>
  )
}

export default Header