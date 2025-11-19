import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const NavLink = (props) => {
  return (
    <a 
      href={props.href} 
      onClick={() => props.onClick(props.href)} 
      className={props.isActive ? 'active' : ''}
    >
      {props.icon}
    </a>
  )
}

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <NavLink href="#" onClick={setActiveNav} isActive={activeNav === '#'} icon={<AiOutlineHome/>} />
      <NavLink href="#about" onClick={setActiveNav} isActive={activeNav === '#about'} icon={<AiOutlineUser/>} />
      <NavLink href="#experience" onClick={setActiveNav} isActive={activeNav === '#experience'} icon={<BiBookBookmark/>} />
      <NavLink href="#services" onClick={setActiveNav} isActive={activeNav === '#services'} icon={<RiServiceFill/>} />
      <NavLink href="#contact" onClick={setActiveNav} isActive={activeNav === '#contact'} icon={<BiMessageSquareDetail/>} />
    </nav>
  )
}

export default Nav