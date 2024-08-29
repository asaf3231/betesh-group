import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import TelAvivPage from './pages/TLV/TelAvivPage';
import TLVBusinessPage from './pages/TLV/TLVBusinessPage';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/tel-aviv" element={<TelAvivPage />} />
        <Route path="/telAviv/business/:id" element={<TLVBusinessPage />} />
      </Routes>
    </Router>
  );
}

export default App;