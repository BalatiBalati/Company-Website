import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../sanity/client';
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

  const handleSubmit = () => {
    setLoading(true);
    setError(null);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        setLoading(false);
        setError('Error sending message. Please try again.');
        console.error('Error sending message:', err);
      });
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
          <img src={images.phone} alt="Phone" />
          <a href="tel:+23058599747" className="p-text">(230) 5859-9747</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
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
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {error && <p className="error-text">{error}</p>}
        </div>
      ) : (
        <div>
          <h3 className="head-text"><span>Thank You For Getting In Touch</span></h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(
MotionWrap(Footer, 'app__footer'),'contact', "app__bgImage", ['contact', 'footer']);
