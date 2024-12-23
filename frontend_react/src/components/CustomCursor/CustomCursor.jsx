import React, { useEffect, useState } from 'react';
import './CustomCursor.scss'; // Ensure the style file exists

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const activateCursor = () => setActive(true);
    const deactivateCursor = () => setActive(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', activateCursor);
    document.addEventListener('mouseout', deactivateCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', activateCursor);
      document.removeEventListener('mouseout', deactivateCursor);
    };
  }, []);

  return (
    <div
      className={`app__custom-cursor ${active ? 'active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
