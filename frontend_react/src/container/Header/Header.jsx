import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [rotateAngle, setRotateAngle] = useState(0);
  const [stats, setStats] = useState({ partners: 0, projects: 0 });

  const circles = [
    { image: images.flutter, angleOffset: 0 },
    { image: images.redux, angleOffset: 60 },
    { image: images.sass, angleOffset: 120 },
    { image: images.flutter, angleOffset: 240 },
    { image: images.redux, angleOffset: 300 },
    { image: images.sass, angleOffset: 240 },
    { image: images.sass, angleOffset: -60 },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateAngle((prevAngle) => prevAngle + 1);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateStats = (target, duration, key) => {
      let start = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        setStats((prev) => ({ ...prev, [key]: Math.min(Math.floor(start), target) }));
        if (start >= target) clearInterval(timer);
      }, 16);
    };

    animateStats(5, 1000, 'partners');
    animateStats(80, 1000, 'projects');
  }, []);

  const getTranslateX = (index, circle) => 
    windowWidth <= 375 ? 150 : 240;

  const circleStyles = {
    transform: `rotate(${rotateAngle}deg)`,
    transition: 'transform 15s linear',
    position: 'relative',
    top: windowWidth <= 768 ? '150px' : windowWidth <= 1200 ? '140px' : '-140px',
  };

  return (
    <div className="app__header app__flex"> 
      <div className="app__header-bg">
        <img src={images.bgIMG} className="app__header-bg-img" alt="background" />
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
            <p className="p-text">Website Developer</p>
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
        style={circleStyles}
      >
        {circles.map((circle, index) => (
          <div
            className="circle-cmp app__flex"
            key={index}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${circle.angleOffset + index * 120}deg) translateX(${getTranslateX(index, circle)}px)`,
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
