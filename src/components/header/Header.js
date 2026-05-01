import React, { Component } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const HeaderText = () => {
  return (
    <>
      <h4 align="center">Hello I'm</h4>
      <h1 align="center">Menard Macaraeg</h1>
      <h5 align="center" className="text-light">Systems Developer | UI/UX Designer | IT Support</h5>
      <h5 align="center" className="text-light">Building functional, user-centered web applications and systems</h5>
    </>
  )
}

const ProfileImage = () => {
  return (
    <div className='me'>
      <img src={ME} alt="me" />
    </div>
  )
}

class Header extends Component {
  render() {
    return (
      <>
        <div className="container header_container">
          <HeaderText />
          <CTA />
          <HeaderSocial />
          <ProfileImage />
          <div className="container header_container">
            <a href="#contact" className='scroll__down'>Scroll Down</a>
          </div>
        </div>
      </>
    )
  }
}

export default Header