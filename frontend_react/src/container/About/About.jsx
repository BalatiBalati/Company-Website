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
        <br></br>
        <br></br>
        Get to know <span> & Me The Company</span> <br />
      </h2>

      <div className="app__rows">
        <div className="app__row">
          <h2>About Me</h2>
          <p className="body-text">
            I'm a software development and AI enthusiast, with a passion for merging cutting-edge technology with creative flair.  
            Whether creating software solutions, crafting eye-catching animations, designing 
            intuitive websites, or time capsuling moments through videography and photography;  
            <br></br>I enjoy bringing ideas to life in unexpected ways. <br></br>For me, every project is an exciting opportunity to innovate. 
            <br></br>
            <span><b>So, Let us cultivate a thriving digital landscape together.</b></span>
            
          </p>
        </div>

  
        <div className="app__row">
          <h2>About Chipukizi</h2>
          <p>

          </p>
        </div>
      </div>

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
