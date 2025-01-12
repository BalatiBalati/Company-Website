import React from "react";
import "./App.scss";

import { Home, About, Footer, Work, Skills} from "./container";
import { Navbar } from "./components";
import AnimatedBlob from "./components/AnimatedBlob/AnimatedBlob";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import MouseTrackingEffect from "./components/MouseTrackingEffect/MouseTrackingEffect";

const App = () => {
  return (
    <div className="app relative w-screen h-screen overflow-hidden">
      {/* Mouse tracking effect */}
      {/*<MouseTrackingEffect />*/}
      {/* Custom Cursor */}
      {/*<CustomCursor />*/}
      
      {/* Render animated blobs in a separate container */}
      <div className="blob-container">
        {[...Array(8)].map((_, i) => (
          <AnimatedBlob key={i} index={i} />
        ))}
      </div>

      {/* Navbar and page sections */}
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      {/*<Testimonials />*/}
      <Footer />
    </div>
  );
};

export default App;
