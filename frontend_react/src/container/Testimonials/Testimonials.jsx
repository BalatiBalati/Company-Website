import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../sanity/client';

import './Testimonials.scss';

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      company: 'Company A',
      feedback: 'This is a fantastic service!',
      imgUrl: '/src/assets/testimonial1.png', // Replace with your actual image path
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'Company B',
      feedback: 'I am very satisfied with my experience.',
      imgUrl: '/src/assets/testimonial2.png', // Replace with your actual image path
    },
    {
      id: 3,
      name: 'Alice Johnson',
      company: 'Company C',
      feedback: 'Highly recommend to everyone!',
      imgUrl: '/src/assets/testimonial3.png', // Replace with your actual image path
    },
  ];

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length > 0 && (
        <div className="app__testimonial-container app__flex">
          <div className="app__testimonial-item app__flex">
            <img src={test.imgUrl} alt="testimonial" />
            <div className="app__testimonial-context">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="bold-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </div>
      )}

      {/* Brand logos section below the testimonials and buttons */}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
  'testimonials',
  'app__whitebg'
);
