import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Home.scss';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [rotateAngle, setRotateAngle] = useState(0);
  const [stats, setStats] = useState({ partners: 0, projects: 0 });

  const circles = [
    { image: images.pr, angleOffset: 60 },
    { image: images.react, angleOffset: 120 },
    { image: images.python, angleOffset: 240 },
    { image: images.nodejs, angleOffset: 300 },
    { image: images.c_sharp, angleOffset: 240 },
    { image: images.photoshop, angleOffset: -60 },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
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

  // Updated getTranslateX function
  const getTranslateX = (index, circle) => {
    if (windowWidth <= 750) {
      return 250; // For smaller screens (<= 750px)
    } else if (windowHeight <= 700) {
      return 190; // For very small height (<= 750px)
    } else if (windowHeight <= 850) {
      return 210; // For taller screens (<= 850px) but wide screens
    } else {
      return 240; // Default value for larger screens
    }
  };

  const circleStyles = {
    transform: `rotate(${rotateAngle}deg)`,
    transition: 'transform 15s linear',
  };

  return (
    <div className="app__header app__flex">
      <div className="app__header-bg">
        <img className="app__header-bg-img" />
      </div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* {windowWidth > 750 && <span>😉</span>} */}
            <div
              style={{
                marginLeft: windowWidth < 750 ? -170 : 20, // Conditional margin
              }}
            >
              <p className="p-text">Hi there! My name is</p>
              <h1 className="head-text"><span>BALATI<br />BALATI</span></h1>
            </div>
          </div>

          {/* <div className="tag-cmp app__flex">
            <p className="p-text">Software Developer <br /></p>
            <p className="p-text">Graphics Designer <br /></p>
            <p className="p-text">AI Enthusiast <br /></p>
          </div> */}
        </div>
      </motion.div>

      <div className="bottom-holder">
        <div className="image-holder">
          <img className='hero-image' src={images.profile} alt="profile_bg" />
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
                  style={{
                    width:
                    windowHeight < 700
                      ? '40px'
                      : windowHeight < 850
                      ? '53px'
                      : '60px', // Default
                  height:
                    windowHeight < 700
                      ? '40px'
                      : windowHeight < 850
                      ? '53px'
                      : '60px', // Default
                  }}
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
          >
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              src={images.circle}
              alt="profile_circle"
              className="overlay_circle"
            />
          </motion.div>
        </div>

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
    </div>
  );
};

export default AppWrap(
  MotionWrap(Home, 'app__header app__flex'), 'home', 'app__primary');
