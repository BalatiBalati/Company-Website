import React from 'react';
import './App.scss';

import { Header, About, Footer, Work, Skills, Testimonials } from './container';
import { Navbar } from "./components";
import AnimatedBlob from './components/AnimatedBlob/AnimatedBlob';
import CustomCursor from './components/CustomCursor/CustomCursor';
import MouseTrackingEffect from './components/MouseTrackingEffect/MouseTrackingEffect';


const App = () => {
  return (
    <div className="app">

        <MouseTrackingEffect />
        <AnimatedBlob />
        <CustomCursor />
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />

    </div>
  );
}

export default App;
