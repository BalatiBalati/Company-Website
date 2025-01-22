import React, { useState } from 'react';
//import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { Eye, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // Static array of works

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  
  const works = [
    {
      title: "Online Tutor",
      description: "A Vue JS online tutor website application created for Mauritian primary students.",
      imgUrl: images.Tutor,
      projectLink: "https://balatibalati.github.io/TuitionApp/",
      codeLink: "https://github.com/BalatiBalati/TuitionApp.git",
      tags: ["Website Applications"],
    },
    {
      title: "PacWars",
      description: "In this Star Wars-themed Pac-Man game, help R2-D2 navigate through the Death Star, avoiding enemies stormtroopers.",
      imgUrl: images.Pacman,
      projectLink: "http://localhost:8000/",
      codeLink: "https://github.com/BalatiBalati/Python-PacWars_Game.git",
      tags: ["Game Development"],
    },
    {
      title: "FruitBot",
      description: "A fruit classification robotic arm, capable automatically detecting the type of fruit and its condition. (Rotten/Ripe)",
      imgUrl: images.Fruitbot,
      projectLink: "https://example.com/project3",
      codeLink: "https://github.com/BalatiBalati/FruitBot.git",
      tags: ["Robotics & Artificial Intelligence"],
    },
  ];

  const [filterWork, setFilterWork] = useState(works);



  return (
    <div className="app__works"> {/* Added a container div for centering */}
      <h2 className="head-text">My <span> Portfolio </span></h2>

      <div className="app__work-filter">
        {['All', 'Website Applications', 'Game Development', 'Robotics & Artificial Intelligence'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              {work.imgUrl ? (
                <img src={work.imgUrl} alt={work.title} />
              ) : (
                <img src="/path/to/fallback-image.png" alt="Fallback" />
              )}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <Eye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <Github />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
            </div>

            <div className="app__work-tag app__flex">
              <p className="p-text">{work.tags[0]}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', "app__whitebg");
