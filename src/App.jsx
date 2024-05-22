import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import MovieSection from './components/movieSection/movieSection';
import Confiteria from './pages/Confiteria/confiteria';
import Login from './pages/login/login';
import MovieDetails from './pages/movieSectionDetails/movieSectionDetails';
import Silleteria from './pages/Silleteria/Silleteria';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MovieSection />} />
          <Route path="/confiteria" element={<Confiteria />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cartelera" element={<div>Cartelera Page</div>} /> {/* Placeholder for Cartelera */}
          <Route exact path="/movie/:id" element={<MovieDetails />} />
          <Route path="/silleteria" element= {<Silleteria/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
