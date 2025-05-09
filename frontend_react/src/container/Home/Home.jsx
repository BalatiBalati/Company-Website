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

  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Software Engineer', 'Web Developer', 'Graphics Designer'];
  const typingSpeed = 100;
  const deletingSpeed = 100;
  const delayBetweenWords = 2500;

  const circles = [
    { image: images.pr, angleOffset: 60 },
    { image: images.react, angleOffset: 120 },
    { image: images.python, angleOffset: 240 },
    { image: images.nodejs, angleOffset: 300 },
    { image: images.c_sharp, angleOffset: 240 },
    { image: images.photoshop, angleOffset: -60 },
  ];

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenWords);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
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

    animateStats(1, 1000, 'partners');
    animateStats(5, 1000, 'projects');
  }, []);

  const getTranslateX = (index, circle) => {
    if (windowWidth <= 400) return 145;
    if (windowWidth <= 450) return 185;
    if (windowWidth <= 750) return 250;
    if (windowHeight <= 700) return 180;
    if (windowHeight <= 850) return 210;
    return 240;
  };
  
  const circleStyles = {
    transform: `rotate(${rotateAngle}deg)`,
    transition: 'transform 15s linear',
  };

  const calculateOverlaySize = () => {
    if (windowWidth <= 400) return 275;
    if (windowWidth <= 750) return 370;
    if (windowHeight <= 700) return 190;
    if (windowHeight <= 850) return 200;
    return 465;
  };

  const overlayCircleStyle = {
    position: 'absolute',
    width: `${calculateOverlaySize()}px`,
    height: `${calculateOverlaySize()}px`,
    borderRadius: '50%',
    background: '#bec7d3',
    zIndex: -5,
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) rotate(${-rotateAngle}deg)`,
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',

  };

  return (
    <div className="app__header app__flex">
      <div className="app__header-bg">
        <img className="app__header-bg-img" />
      </div>
      
      <div className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {windowWidth > 750 && <span>👋🏽</span>}
            <div style={{ marginLeft: windowWidth < 750 ? -170 : 20 }}>
              <p className="p-text">Hi there! My name is</p>
              <h1 className="head-text"><span2>BALATI<br />BALATI</span2></h1>
            </div>
          </div>
          
          <div className="tag-cmp app__flex">
            <div className='Typewrite_Container'>
              <div className='typewrite_content'>
                <span className='dynamic-text'><span>{displayText}</span></span>
                <span className='cursor'>|</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-holder">
        <div className="image-holder">
          <img className='hero-image' src={images.profile} alt="profile_bg" />
          
          <div className="app__header-circles" style={circleStyles}>
            <div style={overlayCircleStyle} />
            
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
                <img
                  src={circle.image}
                  alt="circle"
                  style={{
                    width:
                      windowHeight < 700
                        ? '40px'
                        : windowHeight < 850
                        ? '53px'
                        : '60px',
                    height:
                      windowHeight < 700
                        ? '40px'
                        : windowHeight < 850
                        ? '53px'
                        : '60px',
                  }}
                />
              </div>
            ))}
          </div>

          {/* <div className="app__header-img">
            <img
              src={images.circle}
              alt="profile_circle"
              className="overlay_circle"
            />
          </div> */}
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
