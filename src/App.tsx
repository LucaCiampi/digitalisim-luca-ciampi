import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonsGrid from './components/PersonsGrid';
import Sidenav from './components/Sidenav';
import PersonDetails from './components/PersonDetails';
import { useState } from 'react';

function App() {
  // State pour les filtres
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [countryFilter, setCountryFilter] = useState<string>('');

  return (
    <Router>
      <div className="App">
        <Sidenav
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          countryFilter={countryFilter}
          setCountryFilter={setCountryFilter}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <PersonsGrid
                  genderFilter={genderFilter}
                  countryFilter={countryFilter}
                />
              }
            />
            <Route path="/persons/:personId" element={<PersonDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
