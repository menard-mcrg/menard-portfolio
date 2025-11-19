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
  const prototypingItems = [
    'Wireframe creation for layout planning.',
    'Interactive mockups for client presentations.',
    'Low- and high-fidelity prototypes for testing.',
    'Collaboration with stakeholders on design flow.',
    'Iterative updates to refine concepts quickly.'
  ]

  const developmentItems = [
    'Responsive layouts optimized for all devices.',
    'Clean and modern interface design.',
    'Accessibility-focused development.',
    'Component-based UI with React.js.',
    'Consistent design systems and style guides.'
  ]

  const testingItems = [
    'Usability testing for smooth user interaction.',
    'Cross-browser and cross-device compatibility checks.',
    'A/B testing to compare design variations.',
    'Collecting user feedback and refining UI.',
    'Bug tracking and interface performance testing.',
    'Testing and Support, Maintenance.'
  ]

  return (
    <section id='services'>
      <h5>Services</h5>
      <h2>What i Offer</h2>

      <div className="container services__container">
        <ServiceCard title="Prototyping" items={prototypingItems} />
        <ServiceCard title="UI & UX Development" items={developmentItems} />
        <ServiceCard title="UI & UX Testing" items={testingItems} />
      </div>
    </section>
  )
}

export default Services