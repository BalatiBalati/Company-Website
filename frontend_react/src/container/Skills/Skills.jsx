import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../sanity/client';

import "./Skills.scss";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });
  }, []);

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
                  <img src={urlFor(skill.icon)} alt={skill.name} />
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
            {experience?.map((exp) => (
              <motion.div
                className="app__skills-exp-item"
                key={exp.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{exp.year}</p>
                </div>
                <motion.div className="app__skills-exp-work">
                  {exp?.works?.map((work) => (
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
