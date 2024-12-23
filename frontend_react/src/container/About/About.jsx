import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { client, urlFor } from '../../sanity/client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;
    client.fetch(query)
      .then((data) => setAbouts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        Get to know <span>Me</span> <br />
        Get to know <span>The Company</span> <br />
      </h2>

      <div className="app__rows">

     
        <div className="app__row">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with a strong background in building 
            dynamic and responsive web applications. I love solving complex 
            problems and collaborating with teams to bring ideas to life.
          </p>
        </div>

  
        <div className="app__row">
          <h2>About Chipukizi</h2>
          <p>
            Chipukizi is an innovative company focused on delivering 
            cutting-edge tech solutions. Our mission is to empower businesses 
            with tools that drive growth, efficiency, and success.
          </p>
        </div>
      </div>

      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div 
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about._id}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div> 
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', "app__whitebg");
