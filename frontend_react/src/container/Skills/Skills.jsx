import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import "./Skills.scss";

const Skills = () => {
  // Static data to replace backend data
  const experience = [
    {
      year: '2023',
      works: [
        {
          name: 'Frontend Developer',
          company: 'Tech Co.',
          desc: 'Developed modern user interfaces with React.',
        },
        {
          name: 'UI Designer',
          company: 'Creative Agency',
          desc: 'Designed intuitive UI layouts for web applications.',
        },
      ],
    },
    {
      year: '2022',
      works: [
        {
          name: 'Backend Developer',
          company: 'Startup Inc.',
          desc: 'Implemented robust REST APIs with Node.js.',
        },
      ],
    },
  ];

  const skills = [
    {
      name: 'JavaScript',
      bgColor: '#F0DB4F',
      icon: 'https://path-to-your-javascript-icon.png',
      level: 90,
    },
    {
      name: 'React',
      bgColor: '#61DBFB',
      icon: 'https://path-to-your-react-icon.png',
      level: 85,
    },
    {
      name: 'CSS',
      bgColor: '#264de4',
      icon: 'https://path-to-your-css-icon.png',
      level: 80,
    },
  ];

  return (
    <div className="skills__app-wrapper">
      <div className="app__skills body-text">
        <h2 className="head-text">Skills <span>& Experience</span></h2>

        <div className="app__skills-container">
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>

                <div className="app__skills-progress-bar">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    style={{ backgroundColor: skill.bgColor }}
                  />
                </div>
                <p className="progress-percentage">{skill.level}%</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="app__skills-exp">
            {experience.map((exp) => (
              <motion.div
                className="app__skills-exp-item"
                key={exp.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{exp.year}</p>
                </div>
                <motion.div className="app__skills-exp-work">
                  {exp.works.map((work) => (
                    <React.Fragment key={work.name}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <Tooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </Tooltip>
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', "app__whitebg");
