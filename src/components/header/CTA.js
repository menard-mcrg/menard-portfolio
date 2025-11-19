import React from 'react'

const Button = (props) => {
  return (
    <a href={props.href} className={props.className}>{props.text}</a>
  )
}

const CTA = () => {
  return (
    <div className='cta'> 
        <Button href="#ahievement" className='btn' text='View My Work' />
        <Button href="#contact" className='btn btn-1' text="Let's Talk" />
    </div>
  )
}

export default CTA