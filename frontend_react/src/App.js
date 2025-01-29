import React from "react";
import "./App.scss";

import { Home, About, Footer, Work, Skills} from "./container";
import { Navbar } from "./components";
import AnimatedBlob from "./components/AnimatedBlob/AnimatedBlob";

const App = () => {
  return (
    <div className="app relative w-screen h-screen overflow-hidden">
      
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
      <Footer />
    </div>
  );
};

export default App;
