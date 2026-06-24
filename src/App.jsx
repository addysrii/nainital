import React from 'react';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import Hero from './componenets/Hero'; // original NainitalStory
import AnimatedBackground from './componenets/Poetry'; // original Earth/Poetry scene
import WebDev from './componenets/WebDev';
import MobDev from './componenets/MobDev';
import IOT from './componenets/IOT';
import BlockChain from './componenets/BlockChain';
import AIML from './componenets/AIML';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Aditya | Portfolio</title>
        </Helmet>
        
        {/* Global Navigation Bar */}
        <Navbar />
        
        <Routes>
          {/* Main Portfolio Homepage */}
          <Route path="/" element={<Home />} />
          
          {/* Travel Logs Section */}
          <Route path="/travel" element={<Hero />} />
          
          {/* 3D Poetry Workspace */}
          <Route path="/poetry" element={<AnimatedBackground />} />
          
          {/* Project Showcases */}
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/mobdev" element={<MobDev />} />
          <Route path="/iot" element={<IOT />} />
          <Route path="/blockchain" element={<BlockChain />} />
          <Route path="/aiml" element={<AIML />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
