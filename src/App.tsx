import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import PersonsGrid from './components/personsGrid/PersonsGrid';
import Sidenav from './components/layout/Sidenav';
import PersonDetails from './components/PersonDetails';
import { useState } from 'react';
import Login from './components/login/Login';
import ProtectedRoute from './components/login/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  // State pour les filtres
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [countryFilter, setCountryFilter] = useState<string>('');

  return (
    <AuthProvider>
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
              {/* Utilisateur non connecté */}
              <Route path="*" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />

              {/* Utilisateur connecté */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <PersonsGrid
                      genderFilter={genderFilter}
                      countryFilter={countryFilter}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/persons/:personId"
                element={
                  <ProtectedRoute>
                    <PersonDetails />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
