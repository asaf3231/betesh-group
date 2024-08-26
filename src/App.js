import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import TelAvivPage from './pages/TLV/TelAvivPage';
import BusinessPage from './components/BusinessPage'; // Ensure this is correctly imported
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} /> {/* Root path set to SearchPage */}
        <Route path="/search" element={<SearchPage />} /> {/* Optional: Keep /search as a valid path */}
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/tel-aviv" element={<TelAvivPage />} />
        <Route path="/business/:id" element={<BusinessPage />} /> {/* BusinessPage route */}
      </Routes>
    </Router>
  );
}

export default App;
