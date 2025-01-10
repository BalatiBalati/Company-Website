import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'; // Ensure these images are imported
import './Header.scss';

const Header = () => {
  const circles = [
    { image: images.flutter, angleOffset: 0 },
    { image: images.redux, angleOffset: 60 },
    { image: images.sass, angleOffset: 120 },
    { image: images.flutter, angleOffset:240 },
    { image: images.redux, angleOffset: 300 },
    { image: images.sass, angleOffset: 240 },
    { image: images.sass, angleOffset: -60 },
  ];

  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateAngle((prevAngle) => prevAngle + 1); // Increase the rotation angle over time
    }, 16); // ~60fps (16ms per frame)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // State for animating stats numbers
  const [stats, setStats] = useState({ partners: 0, projects: 0 });

  useEffect(() => {
    const animateStats = (target, duration, key) => {
      let start = 0;
      const increment = target / (duration / 16); // Increment per frame at ~60fps

      const timer = setInterval(() => {
        start += increment;
        setStats((prev) => ({ ...prev, [key]: Math.min(Math.floor(start), target) }));
        if (start >= target) clearInterval(timer);
      }, 16);
    };

    animateStats(5, 1000, 'partners'); // Animate 'partners' to 5 in 1 second
    animateStats(80, 1000, 'projects'); // Animate 'projects' to 80 in 1 second
  }, []);

  return (
    <div className="app__header app__flex"> 

      <div className="app__header-bg">
        <img src={images.bgIMG} className="app__header-bg-img" />
      </div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>😉</span>
            <div style={{ marginLeft: 20 }}>
              <p className="body-text">Hi there! My name is</p>
              <h1 className="head-text"><span>BALATI BALATI</span></h1>
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
          transition: 'transform 15s linear', // Smooth animation transition
          position: 'relative',  // Keep the circles positioned relative to the container
          top: '-140px',
        
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
              transform: `translate(-50%, -50%) rotate(${circle.angleOffset + index * 120}deg) translateX(240px)`,
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

      <div className="app__new-section">
        <h2 className="new-section-heading">DISCOVER MY WORK</h2>
        <div className="app__stats">
          <div className="app__stats-row">
            <div className="app__stats-item">
              <h3 className="stats-heading">PARTNERS</h3>
              <div className="stats-number">{stats.partners}</div>
            </div>
            <div className="app__stats-item">
              <h3 className="stats-heading">PROJECTS</h3>
              <div className="stats-number">{stats.projects}</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    
    
  );
};

export default AppWrap(
  MotionWrap(Header, 'app__header app__flex'), 'header', 'app__primary');
