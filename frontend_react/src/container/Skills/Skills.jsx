import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import "./Skills.scss";

const Skills = () => {
  // Static data to replace backend data
  const experience = [
    {
      year: '2024 - Present',
      works: [
        {
          name: 'Digital Intern',
          company: 'Middlesex University',
          desc: 'Assisted in website designing and maintenance, videography and photography for the Mauritian based University',
        },
        {
          name: 'Freelance Development',
          desc: 'Web development for local businesses and individuals',
        },
      ],
    },
    {
      year: '2023',
      works: [
        {
          name: 'Graphics & Website Designer',
          company: 'Tanzania ICT Commission',
          desc: 'Helped in the designing of their new entry cards, as well as assisted in refurbishing the design for their website.',
        },
      ],
    },
    {
      year: '2021',
      works: [
        {
          name: 'Project Co-Ordinator & Teacher',
          company: 'She Codes for Change',
          desc: 'Lead, managed and taught coding skills to a group of youth within the country of Tanzania',
        },
      ],
    },
    {
      year: '2016',
      works: [
        {
          name: 'Animations Specialist',
          company: 'Tanzania Bora Initiative',
          desc: 'Scripted, story boarded, designed and created animations aimed at advocating for equality',
        },
      ],
    },
  ];

  const skills = [
    {
      name: 'JavaScript',
      bgColor: '#3498db',
      icon: images.javascript,
      level: 81,
    },
    {
      name: 'MySQL',
      bgColor: '#3498db',
      icon: images.mysql,
      level: 70,
    },
    {
      name: 'CSS',
      bgColor: '#3498db',
      icon: images.sass,
      level: 80,
    },
    {
      name: 'Mongo DB',
      bgColor: '#3498db',
      icon: images.mongo,
      level: 42,
    },
    {
      name: 'React',
      bgColor: '#3498db',
      icon: images.react,
      level: 80,
    },
    {
      name: 'C-Sharp',
      bgColor: '#3498db',
      icon: images.c_sharp,
      level: 48,
    },
    {
      name: 'Git',
      bgColor: '#3498db',
      icon: images.git,
      level: 64,
    },
    {
      name: 'Premier',
      bgColor: '#3498db',
      icon: images.pr,
      level: 62,
    },
    {
      name: 'Photoshop',
      bgColor: '#3498db',
      icon: images.photoshop,
      level: 68,
    },
    {
      name: 'Raspberry Pi',
      bgColor: '#3498db',
      icon: images.raspi,
      level: 90,
    },
    {
      name: 'Python',
      bgColor: '#3498db',
      icon: images.python,
      level: 85,
    },
    {
      name: 'Pytorch',
      bgColor: '#3498db',
      icon: images.pytorch,
      level: 80,
    },
    {
      name: 'Figma',
      bgColor: '#3498db',
      icon: images.figma,
      level: 71,
    },
    {
      name: 'Arduino',
      bgColor: '#3498db',
      icon: images.arduino,
      level: 74,
    },
    {
      name: 'Illustrator',
      bgColor: '#3498db',
      icon: images.illustrator || 'https://path-to-placeholder-image.png', // Fallback for missing image
      level: 21,
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
