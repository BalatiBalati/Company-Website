import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'; // Ensure these images are imported
import './Header.scss';

const Header = () => {
  const circles = [
    { image: images.flutter, angleOffset: 0 },
    { image: images.redux, angleOffset: 120 },
    { image: images.sass, angleOffset: 240 },
  ];

  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateAngle((prevAngle) => prevAngle + 1); // Increase the rotation angle over time
    }, 16); // ~60fps (16ms per frame)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="app__header app__flex"> 
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi there! My name is</p>
              <h1 className="head-text">Balati</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Developer</p>
            <p className="p-text">Graphics Designer</p>
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        className="app__header-circles"
        style={{
          transform: `rotate(${rotateAngle}deg)`, // Apply rotation to the entire container
          transition: 'transform 1s linear', // Smooth animation transition
          position: 'relative',  // Keep the circles positioned relative to the container
          top: '-100px',
        
        }}
      >
        {circles.map((circle, index) => (
          <div
            className="circle-cmp app__flex"
            key={index}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${circle.angleOffset + index * 120}deg) translateX(320px)`,
            }}
          >
            <motion.img
              src={circle.image}
              alt="circle"
              style={{ width: '60px', height: '60px' }}
            />
          </div>
        ))}
      </motion.div>
    </div>

          //{/* Black rectangular block below the header */}
    //<div className="black-rectangular-block"></div>
    
  );
};

export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'header',
  'app__primary'
);
