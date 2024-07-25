import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Sidebar from './components/Sidebar';
import './styles.css';




function App() {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <Header />
        <About />
        <Skills />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}

export default App;
