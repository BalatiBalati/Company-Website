import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import SocialMedia from '../../components/SocialMedia';
import './Footer.scss';

const Footer = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    emailjs
      .sendForm(
        'service_oy6fekp', // Replace with your EmailJS Service ID
        'template_cud2sbb', // Replace with your EmailJS Template ID
        form.current,
        'LtoF0lbzPMqA9yPy2' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          setLoading(false);
          setError('Error sending message. Please try again.');
        }
      );
  };

  return (
    <div className="app__footer body-text">
      <h2 className="head-text"><span>Take a coffee & chat with me</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto:bbalati01@gmail.com" className="p-text">bbalati01@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="Phone" />
          <a href="tel:+23058599747" className="p-text">(230) 5859-9747</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form ref={form} className="app__footer-form app__flex" onSubmit={sendEmail}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <button
            type="submit"
            className="p-text"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {error && <p className="error-text">{error}</p>}
        </form>
      ) : (
        <div>
          <h3 className="head-text"><span>Thank You For Getting In Touch</span></h3>
        </div>
      )}

      <div className="app__footer-social">
        <SocialMedia />

        <div className="copyright">
          <p className="p-text"><span>Copyright © 2024 BALATI BALATI</span></p>
          <p className="p-text"><span>All Rights Reserved</span></p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__bgImage',
  ['contact', 'footer']
);
