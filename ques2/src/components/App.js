import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Doc from './pages/Doc';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Process from './pages/Process';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/steps" element={<Process />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
