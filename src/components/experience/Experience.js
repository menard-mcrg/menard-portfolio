import React, { Component } from 'react'
import './experience.css'
import {IoLogoHtml5} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoNodejs} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {IoLogoPython} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {SiJupyter} from 'react-icons/si'
import {SiWordpress} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {FaGitAlt} from 'react-icons/fa'

const ExperienceDetail = (props) => {
  return (
    <article className='experience__details'>
      {props.icon}
      <h4>{props.name}</h4>
      <small className='text-light'>{props.level}</small>
    </article>
  )
}

class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [
        { icon: <IoLogoHtml5 size="1.5em" color='#ff5722'/>, name: 'HTML', level: 'Advanced' },
        { icon: <SiCss3 size="1.5em" color='#0027ff'/>, name: 'CSS', level: 'Advanced' },
        { icon: <FaReact size="1.5em" color='#00A3FF'/>, name: 'React', level: 'Beginner' },
        { icon: <IoLogoJavascript size="1.5em" color="#FFEF06"/>, name: 'Javascript', level: 'Beginner' },
        { icon: <IoLogoNodejs size="2em" color='#0EEA11'/>, name: 'Node.js', level: 'Beginner' },
        { icon: <IoLogoPython size="2.2em" color='#FFC107'/>, name: 'Python', level: 'Beginner' },
        { icon: <SiJupyter size="1.9em" color='#FCCB00'/>, name: 'Jupyter Notebook', level: 'Beginner' },
        { icon: <SiFirebase size="1.7em" color='#FCCB00'/>, name: 'Firebase', level: 'Beginner' },
        { icon: <SiWordpress size="1.8em" color='#ffffffff'/>, name: 'WordPress', level: 'Intermediate' },
        { icon: <SiBootstrap size="1.5em" color="##8b23c5"/>, name: 'Bootstrap', level: 'Beginner' },
        { icon: <SiTailwindcss size="2em"/>, name: 'Tailwind', level: 'Intermediate' },
        { icon: <SiFigma size="2em"/>, name: 'Figma', level: 'Proficient' },
        { icon: <FaGitAlt size="1.9em" color='#F44336'/>, name: 'Git', level: 'Intermediate' },
        { icon: <BsGithub size="1.9em"/>, name: 'GitHub', level: 'Intermediate' }
      ]
    }
  }

  render() {
    return (
      <section id='experience'>
        <h5>Skills</h5>
        <h2>Tools & Technologies i use</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <div className="experience__content">
              {this.state.skills.map((skill, index) => (
                <ExperienceDetail
                  key={index}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Experience