import React from "react";
import { motion } from "framer-motion";
import "./AnimatedBlob.scss";

const AnimatedBlob = ({ motionType }) => {
  // Generate a random starting position
  const randomPosition = {
    top: `${Math.random() * 350}vh`, // Random starting position vertically
    left: `${Math.random() * 100}vw`, // Random horizontal starting position
  };

  // Get random path for random movement (both horizontal and vertical)
  const getRandomPath = () => {
    const spreadX = 200; // Horizontal spread
    const spreadY = 700; // Vertical spread for up and down motion
    return [
      -spreadX + Math.random() * spreadX * 5, // Horizontal movement
      -spreadY + Math.random() * spreadY * 3, // Vertical movement
    ];
  };

  // Get random path for vertical-only movement
  const getVerticalPath = () => {
    const spreadY = 900; // Vertical spread for up and down motion
    return [
      -spreadY + Math.random() * spreadY * 1, // Vertical motion only
    ];
  };

  const variants = {
    initial: {
      x: 0,
      y: 350,
      scale: 0.8,
      opacity: 0.3,
      borderRadius: "60% 40% 70% 30% / 45% 45% 55% 55%",
    },
    animate: {
      x: motionType === "random" ? getRandomPath()[0] : 0, // Horizontal movement for "random" blobs, none for "vertical" blobs
      y: motionType === "random" ? getRandomPath()[1] : getVerticalPath()[0], // Vertical movement for both "random" and "vertical-only" blobs
      scale: [0.8, 1.2, 0.9, 1.1, 0.8],
      opacity: [0.3, 0.4, 0.3, 0.35, 0.3],
      borderRadius: [
        "60% 40% 70% 30% / 45% 45% 55% 55%",
        "50% 50% 50% 50% / 50% 50% 50% 50%",
        "30% 70% 70% 30% / 50% 50% 50% 50%",
        "50% 50% 50% 50% / 50% 50% 50% 50%",
        "60% 40% 70% 30% / 45% 45% 55% 55%",
      ],
      transition: {
        duration: 10 + Math.random() * 10, // Unique duration for each blob
        repeat: Infinity,
        repeatType: "reverse",
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className="animated-blob"
      style={randomPosition} // Apply unique starting position
      initial="initial"
      animate="animate"
      variants={variants}
    />
  );
};

export default AnimatedBlob;
