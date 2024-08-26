import React from 'react';
import { Route, Routes, Link, useMatch } from 'react-router-dom';
import BottomBar from '../../components/BottomBar';
import SectionPage from '../../components/SectionPage';

function CityPage({ cityName, sections }) {
  const { path, url } = useMatch();

  return (
    <div>
      <h1>Welcome to {cityName}</h1>
      <nav>
        {sections.map((section, index) => (
          <Link key={index} to={`${url}/${section.path}`}>
            {section.label}
          </Link>
        ))}
      </nav>
      <Routes>
        {sections.map((section, index) => (
          <Route
            key={index}
            path={`${path}/${section.path}`}
            element={
              <SectionPage
                title={section.label}
                imageUrl={section.imageUrl}
                businesses={section.businesses}
              />
            }
          />
        ))}
      </Routes>
      <BottomBar />
    </div>
  );
}

export default CityPage;