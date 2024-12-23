import React, { useEffect } from 'react';
import './MouseTrackingEffect.scss';

const MouseTrackingEffect = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const layers = document.querySelectorAll('.parallax-layer');

      if (!layers || layers.length === 0) {
        console.log('No layers found');
        return; // Guard: Exit if no layers.
      }

      layers.forEach((layer) => {
        if (!layer || typeof layer.getBoundingClientRect !== 'function') {
          console.log('Invalid layer found', layer);
          return; // Guard for undefined layers.
        }

        const rect = layer.getBoundingClientRect();
        if (!rect || rect.left === undefined || rect.width === 0) {
          console.log('Invalid rect value:', rect);
          return; // Guard for invalid rect.
        }

        console.log('Layer:', layer, 'Rect:', rect); // Log for debugging.

        const x = ((event.clientX - rect.left) / rect.width) - 0.5;
        const y = ((event.clientY - rect.top) / rect.height) - 0.5;

        // Apply the transform
        layer.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      });
    };

    // Attach the mousemove event listener.
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount.
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-tracking-effect">
      {/* Ensure these elements are rendered properly */}
      <div className="parallax-layer layer1" />
      <div className="parallax-layer layer2" />
      <div className="parallax-layer layer3" />
    </div>
  );
};

export default MouseTrackingEffect;
