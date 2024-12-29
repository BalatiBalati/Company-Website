import React, { useState, useEffect } from 'react';
import { Eye, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../sanity/client';
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const query = `*[_type == "works"]`;
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

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

  // Open Video Modal
  const handleEyeClick = (work) => {
    if (work.tags.includes('Robotics & Artificial Intelligence') && work.videoUrl) {
      setVideoUrl(work.videoUrl);
      setIsVideoModalOpen(true);
    }
  };

  // Close Video Modal
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setVideoUrl('');
  };

  return (
    <div className="app__works">
      <h2 className="head-text">My <span>Portfolio</span></h2>

      <div className="app__work-filter">
        {['Web Applications', 'Game Development', 'Robotics & Artificial Intelligence', 'Videography & Photography', 'All'].map((item, index) => (
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
                <img src={urlFor(work.imgUrl).url()} alt={work.name} />
              ) : (
                <img src="/path/to/fallback-image.png" alt="Fallback" />
              )}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <div onClick={() => handleEyeClick(work)} className="app__flex">
                  <Eye />
                </div>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeVideoModal}>X</button>
            <iframe
              width="100%"
              height="315"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Robotics AI Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', "app__whitebg");
