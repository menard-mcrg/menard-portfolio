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
              subtitle="4 Years of IT Studies"
            />

            <AboutCard 
              icon={<VscFolderLibrary className='about__icon'/>}
              title="Projects"
              subtitle="9+ Completed"
            />
          </div>

          <p>
              I am an Information Technology graduate with experience in web-based systems development, UI/UX design, and technical support. I have worked on academic and real-world projects where I developed system features, designed user interfaces, and created technical documentation.
              My experience includes building responsive applications, managing databases, and performing system testing and troubleshooting. I am comfortable handling tasks from planning and prototyping to implementation and support.
              I am seeking opportunities where I can apply my skills, contribute to system development, and continue improving as an IT professional.
          </p>

          <a href="#contact" className='btn btn-1' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About