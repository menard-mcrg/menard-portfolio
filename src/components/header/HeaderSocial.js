import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const SocialIcon = (props) => {
  return (
    <a href={props.href} target="_blank">{props.icon}</a>
  )
}

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <SocialIcon href="https://www.linkedin.com/in/menard-macaraeg-01095331a/" icon={<BsLinkedin/>} />
      <SocialIcon href="https://github.com/menard-mcrg" icon={<FaGithub/>} />
      <SocialIcon href="https://twitter.com" icon={<FaTwitter/>} />
      <SocialIcon href="https://www.facebook.com/menard.macaraeg.2025/" icon={<FaFacebook/>} />
      <SocialIcon href="https://www.instagram.com/" icon={<FaInstagram/>} />
    </div>
  )
}

export default HeaderSocial