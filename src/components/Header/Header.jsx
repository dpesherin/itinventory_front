import React from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"

export default function Header() {
  return (
    <div className='header' id='header'>
      <div className="logo-area">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )
}
