import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  const abouts = [
    {
      _id: '1',
      title: 'Web Development',
      imgUrl: '/images/web-development.png', // Replace with your actual image path
      description: 'Creating modern and responsive web applications tailored to your needs.',
    },
    {
      _id: '2',
      title: 'AI Solutions',
      imgUrl: '/images/ai-solutions.png', // Replace with your actual image path
      description: 'Providing cutting-edge AI solutions to enhance your business efficiency.',
    },
    {
      _id: '3',
      title: 'UI/UX Design',
      imgUrl: '/images/ui-ux-design.png', // Replace with your actual image path
      description: 'Crafting intuitive and user-friendly designs for seamless user experiences.',
    },
  ];

  return (
    
      <div className="app__about">
        <h2 className="head-text">
          <br />
          <span>About Me</span>
        </h2>

        <div className="app__rows">
          <div className="app__row body-text">
            <span>
              {/* <h2></h2> */}
            </span>
            <p className="body-text">
              I am a <b><span>software development</span></b> and <b><span>AI enthusiast</span></b>, with a passion for merging cutting-edge technology with creative flair.
              One thing to note about me, whether creating <b><span>software solutions</span></b>, crafting eye-catching <b><span>animations</span></b>, designing intuitive <b><span>websites</span></b>, or time-capsuling moments through <b><span>videography</span></b> and <b><span>photography</span></b>;
              <br />
              <br />
              <span>
                <b>I enjoy bringing ideas to life in unexpected ways. <br /></b>
              </span>
            </p>
          </div>
        </div>

        <div className="app__about-wrapper">
          <h2 className="head-text">
            Available <span>Services</span>
          </h2>
          <div className="app__profiles">
            {abouts.map((about) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about._id}
              >
                <img src={about.imgUrl} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {about.price}
                </p>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
