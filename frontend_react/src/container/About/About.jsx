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
    <div className="app__about-wrapper">
      <div className="app__about">
        <h2 className="head-text">
          <br />
          Get to know <span> Me & The Company</span> 
        </h2>

        <div className="app__rows">
          <div className="app__row body-text">
          <span><h2>About Me</h2></span>
            <p className="body-text">
              I am a <b><span>software development</span></b> and <b><span>AI enthusiast</span></b>, with a passion for merging cutting-edge technology with creative flair.  
              One thing to note about me, whether creating <b><span>software solutions</span></b>, crafting eye-catching <b><span>animations</span></b>, designing intuitive <b><span>websites</span></b>, or time-capsuling moments through <b><span>videography</span></b> and <b><span>photography</span></b>;  
              <br />
              <br />
              <span><b>I enjoy bringing ideas to life in unexpected ways. <br /></b></span>
              
            </p>
          </div>

          <div className="app__row body-text">
            <span><h2>About Chipukizi</h2></span>
            <p><span><b>So, Let us cultivate a thriving digital landscape together.</b></span></p>
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
              <p className="p-text" style={{ marginTop: 10 }}>{about.price}</p>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', "app__whitebg");
