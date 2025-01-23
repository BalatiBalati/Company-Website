import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';

const About = () => {
  const abouts = [
    {
      _id: '1',
      title: 'Web Development',
      imgUrl: images.web_dev, // Replace with your actual image path
      description: 'Combining design, functionality, and performance to deliver attractive and scalable website solutions.',
    },
    {
      _id: '2',
      title: 'Mobile Application Development',
      imgUrl: images.mobile_dev, // Replace with your actual image path
      description: 'Designing and building intuitive, high-performance mobile apps tailored for seamless user engagement and functionality.',
    },
    {
      _id: '3',
      title: 'Digital Designing',
      imgUrl: images.Graphics_desgn, // Replace with your actual image path
      description: 'Specializing in creating dynamic motion graphics and visually compelling designs that elevate brands and enhance user experiences.',
    },
  ];

  return (
    
      <div className="app__about">
        {/* <span> */}

        {/* </span> */}
        <div className="app__rows">

        <h2 className="head-text">
            <br />
            About <span>Me</span>
          </h2>
          
          <div className="app__row body-text">

            <p className="body-text">
              <b>Driven by <span>curiosity</span> and a <span>love for technology</span>, I specialize in blending <span>AI</span> with <span>creativity</span> to push boundaries and deliver exceptional <span>software</span>, <span>websites</span>, <span>animations</span>, and <span>visual narratives.</span></b>

              {/* I am a <b><span>software development</span></b> and <b><span>AI enthusiast</span></b>, with a passion for merging cutting-edge technology with creative flair.
              One thing to note about me, whether creating <b><span>software solutions</span></b>, <br/>crafting eye-catching <b><span>animations</span></b>, designing intuitive <b><span>websites</span></b>,<br /> or time-capsuling moments through <b><span><br/>videography</span> and <span>photography</span></b>; */}
              
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
