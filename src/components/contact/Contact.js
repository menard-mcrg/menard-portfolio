import React from 'react'
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {FaFacebookMessenger} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactOption = (props) => {
  return (
    <article className="contact__option">
      {props.icon}
      <h4>{props.title}</h4>
      <a href={props.link} target="_blank">{props.linkText}</a>
    </article>
  )
}

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_75fiyko', 'template_fr496fi', form.current, 'grPF7WVoKagMMEZVr')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
      }, (error) => {
          console.log(error.text);
      }).then(
              message =>alert('Message Sent')
      );

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption 
            icon={<GrMail className='contact__option-icon' color='#f44336'/>}
            title="Email"
            link="mailto:menardmacaraeg0403@gmail.com"
            linkText="Send a massage"
          />

          <ContactOption 
            icon={<FaFacebookMessenger className='contact__option-icon' color='#00b0ff'/>}
            title="Facebook"
            link="https://m.me/menard.macaraeg.2025"
            linkText="Send a massage"
          />
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-1'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact