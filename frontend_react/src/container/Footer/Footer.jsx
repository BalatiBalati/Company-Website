import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import SocialMedia from '../../components/SocialMedia';
import './Footer.scss';

const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const isValidEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Email validation regex
    const { user_name, user_email, message } = formData;

    setIsFormValid(
      user_name.trim() !== '' &&
      isValidEmail(user_email) &&
      message.trim() !== ''
    );
  }, [formData]);

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
          setFormData({ user_name: '', user_email: '', message: '' }); // Clear the form
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          setLoading(false);
          setError('Error sending message. Please try again.');
        }
      );
  };

  const handleDismissMessage = () => {
    setIsFormSubmitted(false);
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

      {isFormSubmitted && (
        <div className="app__footer-thankyou">
          <div className="thankyou-box">
            <p className="thankyou-text">
              Thank you for getting in touch!
            </p>
            <button className="dismiss-button" onClick={handleDismissMessage}>
              Dismiss
            </button>
          </div>
        </div>
      )}

      <form
        ref={form}
        className={`app__footer-form app__flex ${isFormSubmitted ? 'form-hidden' : ''}`}
        onSubmit={sendEmail}
      >
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="p-text"
          disabled={!isFormValid || loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {error && <p className="error-text">{error}</p>}
      </form>

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
