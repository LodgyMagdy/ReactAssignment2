import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='z-60 fixed top-0 w-screen h-30 bg-secondary text-white flex justify-center items-center gap-x-96'>
        <div className='font-bold uppercase text-3xl me-10'>
         <NavLink to=''>start framework</NavLink>
        </div>
        <div className='font-bold uppercase me-10'>
         <NavLink to='/about' className={({ isActive }) => isActive ? 'my-active me-5' : 'me-5'}>about</NavLink>
         <NavLink to='/portfolio' className={({ isActive }) => isActive ? 'my-active me-5' : 'me-5'}>portfolio</NavLink>
         <NavLink to='/contact' className={({ isActive }) => isActive ? 'my-active me-5' : 'me-5'}>contact</NavLink>
        </div>
      </div>
    </>
  )
}
