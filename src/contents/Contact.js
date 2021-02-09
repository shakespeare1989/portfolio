//emailjs.send("service_9j3398t","service_9j3398t");

import React from 'react';
import emailjs from 'emailjs-com';
import Social from '../components/Social'
//import './ContactUs.css';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9j3398t', 'template_qjmym0u', e.target, 'user_7zJqF2BgzHn7bELuJK8cu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      <div className="contact">
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="from_name" />
      <label>Name</label>
      <input type="text" name="from_email" />
      <label>Email</label>
      <input type="email" name="message" />
      <label>Message</label>
      <textarea name="message" />
      <input className="submitButton" type="submit" value="Send" />
    </form>
    
        <Social />

    </div>
  );
}
    