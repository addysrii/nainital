import React from 'react';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import AnimatedBackground from './componenets/Poetry';
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
          <title>Aditya</title>
        </Helmet>
        {/* <Navbar /> */}
        {/* <Hero/>
      <PoetryPage/> */}
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Hero />} />
          <Route path="/poetry" element={<AnimatedBackground />} />
            <Route path="/webdev" element={<WebDev />} />
             <Route path="/Mobdev" element={<MobDev />} />
              <Route path="/iot" element={<IOT />} />
               <Route path="/blockchain" element={<BlockChain />} />
               <Route path="/aiml" element={<AIML />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
