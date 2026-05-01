import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const ServiceItem = (props) => {
  return (
    <div>
      <BiCheck className='service__list-icon' />
      <p>{props.text}</p>
    </div>
  )
}

const ServiceCard = (props) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{props.title}</h3>
      </div>
      
      <ul className='service__list'>
        {props.items.map((item, index) => (
          <ServiceItem key={index} text={item} />
        ))}
      </ul>
    </article>
  )
}

const Services = () => {
  const SystemsDevelopmentItems = [
    'Develop web-based systems and application features.',
    'Build backend and frontend components.',
    'Work with databases (MySQL / MariaDB).',
    'Implement system functionality and improvements.'
  ]

  const UIUXDesignItems = [
    'Create wireframes and interface prototypes.',
    'Design responsive and user-friendly layouts.',
    'Improve usability and user experience.',
    'Apply consistent design standards.'
  ]

  const TechnicalSupportItems = [
    'Perform system testing, debugging, and troubleshooting.',
    'Provide basic computer maintenance and support.',
    'Ensure system functionality and performance.',
    'Assist in deployment and system updates.'
  ]

  return (
    <section id='services'>
      <h5>Services</h5>
      <h2>What i Offer</h2>

      <div className="container services__container">
        <ServiceCard title="Systems Development" items={SystemsDevelopmentItems} />
        <ServiceCard title="UI/UX Design" items={UIUXDesignItems} />
        <ServiceCard title="Technical Support" items={TechnicalSupportItems} />
      </div>
    </section>
  )
}

export default Services