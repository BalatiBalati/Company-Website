import React, { useEffect } from 'react';
import './MouseTrackingEffect.scss';

const MouseTrackingEffect = () => {
  useEffect(() => {
    // Optional: You can add random initial positions for the blobs
    const layers = document.querySelectorAll('.parallax-layer');

    layers.forEach((layer) => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 300;
      const randomDelay = Math.random() * 2; // Random delay for each blob

      layer.style.animationDelay = `${randomDelay}s`;
      layer.style.left = `${randomX}%`;
      layer.style.top = `${randomY}%`;
    });
  }, []);

  return (
    <div className="mouse-tracking-effect">
      {/* Floating blobs */}
      <div className="parallax-layer layer1" />
      <div className="parallax-layer layer2" />
      <div className="parallax-layer layer3" />
    </div>
  );
};

export default MouseTrackingEffect;
