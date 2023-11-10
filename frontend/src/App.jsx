import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Portfolio from './Portfolio'; // Assuming Portfolio.jsx is in the same directory
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* You can add more routes here as your app grows */}
      </Routes>
    </Router>
  );
}

export default App;
