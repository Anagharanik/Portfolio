import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_god0s2v', 'template_dfxaoon', form.current, 'ywEDamsPX1kEfLwzA')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('There was an error sending your message. Please try again.');
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
