import React, { Component } from 'react'
import './achievement.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'


const AchievementItem = (props) => {
  return (
    <article className='achievement__item'>
      <div className="achievement__item-image">
        <img src={props.image} alt="" />
      </div>
      <h3>{props.title}</h3>
      <div className="achievement__item-cta">
        <a href="#" className='btn' target='_blank'>View</a>
        <a href="#" className='btn btn-1' target='_blank'>Demo</a>
      </div>
    </article>
  )
}

class Achievement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        { image: IMG1, title: 'SK Project Monitoring System' },
        { image: IMG2, title: 'CLSU Merch' },
        { image: IMG3, title: 'Ticket Now System' },
        { image: IMG4, title: 'Old Portfolio create using wordpress' },
        { image: IMG5, title: 'Clone DOLE Website using wordpress' },
        { image: IMG6, title: 'TO DO System' },
        { image: IMG7, title: 'DevForumCLSU System' },
        { image: IMG8, title: 'Clone DND Website using wordpress' },
        { image: IMG9, title: 'Double Time Delivery App' }
      ]
    }
  }

  render() {
    return (
      <section id='ahievement'>
        <h5>My Recent Work</h5>
        <h2>Here are a few past design projects I've worked on</h2>

        <div className="container achievement__container">
          {this.state.projects.map((project, index) => (
            <AchievementItem 
              key={index}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default Achievement