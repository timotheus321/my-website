import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../homepage.css'
const HomePage = () => {
  return (
    <div className='home-page'>
     <div className="home-page-content">
      <p>Hello fellow seekers, I'm Timothy. Welcome to my website! My primary pursuits are discovery and understanding. What is truth? What is real? I currently pursue this through philosophy such as epistemology and critical rationalism. Mathematics, Computer Science and Physics. My introduction to this was from Naval Ravikant. I first discovered him on the JRE (Joe Rogan's podcast) and then I discovered through him David Deutsch and Karl Popper. To understand reality gives one better predictive powers and as a byproduct better luck. The desire to live my life effortlessly and free from suffering as if lady fortune is by my side is something that drives my curious pursuit to understanding.</p>
    </div>
    <div className="home-page-link">
        <Link to="/knowledge-tree">Go to Knowledge Tree</Link>
      </div>
    </div>
  );
};

export default HomePage;