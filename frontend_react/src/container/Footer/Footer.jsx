import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import SocialMedia from '../../components/SocialMedia';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    setError(null);

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        'YOUR_USER_ID' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('Message sent successfully:', response);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.error('Failed to send message:', error);
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
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
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
