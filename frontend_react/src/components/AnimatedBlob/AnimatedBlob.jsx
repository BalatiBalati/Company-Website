// src/components/AnimatedBlob.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animation

const AnimatedBlob = () => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.2 }}
      transition={{ duration: 2, yoyo: Infinity }}
      style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
        backgroundColor: 'rgba(0, 221, 255, 0.51)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedBlob;
