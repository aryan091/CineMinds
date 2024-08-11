import React from 'react'
import { LOGO } from '../utils/constants'
const Header = () => {
  return (
    <div className='header absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img src={LOGO} alt="Logo" className='logo w-44'/>
    </div>
  )
}

export default Header