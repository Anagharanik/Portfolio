import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to email me:</p>
        <a href="mailto:anagharanikilled@gmail.com" className="email-link">
          anagharanikilled@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
