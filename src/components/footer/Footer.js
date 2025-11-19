import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Permalink = (props) => {
  return (
    <li><a href={props.href}>{props.text}</a></li>
  )
}

const SocialLink = (props) => {
  return (
    <a href={props.href} target="_blank">{props.icon}</a>
  )
}

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Menard Macaraeg</a>
      
      <ul className='permalinks'>
        <Permalink href="#" text="Home" />
        <Permalink href="#about" text="About" />
        <Permalink href="#experience" text="Experience" />
        <Permalink href="#services" text="Services" />
        <Permalink href="#ahievement" text="Works" />
        <Permalink href="#contact" text="Contact" />
      </ul>

      <div className="footer__socials">
        <SocialLink href="https://www.linkedin.com/in/menard-macaraeg-01095331a/" icon={<BsLinkedin/>} />
        <SocialLink href="https://github.com/menard-mcrg" icon={<FaGithub/>} />
        <SocialLink href="https://twitter.com" icon={<FaTwitter/>} />
        <SocialLink href="https://www.facebook.com/menard.macaraeg.2025/" icon={<FaFacebook/>} />
        <SocialLink href="https://www.instagram.com/" icon={<FaInstagram/>} />
      </div>

      <div className="footer__copyright">
        <small>&copy; Menard Macaraeg 2025</small>
      </div>
    </footer>
  )
}

export default Footer