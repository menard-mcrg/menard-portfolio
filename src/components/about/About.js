import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const AboutCard = (props) => {
  return (
    <article className='about__card'>
      {props.icon}
      <h5>{props.title}</h5>
      <small>{props.subtitle}</small>
    </article>
  )
}

const AboutImage = () => {
  return (
    <div className="about_me">
      <div className="about_me-image">
        <img src={ME} alt="About Image" />
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <AboutImage />

        <div className="about_content">
          <div className="about_card">
            <AboutCard 
              icon={<FaAward className='about__icon'/>}
              title="Learning Experience"
              subtitle="3+ Years of IT Studies"
            />

            <AboutCard 
              icon={<VscFolderLibrary className='about__icon'/>}
              title="Projects"
              subtitle="9+ Completed"
            />
          </div>

          <p>
              Hello, I'm Menard Macaraeg, and I'm in my last year of IT studies at Central Luzon State University.
              I really enjoy front-end development, which is about making websites look good and work well. I love creating websites that are easy for everyone to use. My goal is to use my skills to help with important projects.
              I am looking for a chance to learn from skilled developers and grow in this career.
          </p>

          <a href="#contact" className='btn btn-1' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About