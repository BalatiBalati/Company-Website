import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials', 'contacts'].map((item) => (
        <a 
          className="app__navigation-dot"
          href={`#${item}`}
          key={item} // Use a more unique key than just item+index
          style={active === item ? {backgroundColor: '#313BAC'} : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

