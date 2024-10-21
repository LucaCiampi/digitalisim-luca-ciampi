import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import PersonsGrid from './components/dashboard/personsGrid/PersonsGrid';
import PersonDetails from './components/PersonDetails';
import LoginPage from './components/login/LoginPage';
import ProtectedRoutes from './components/login/ProtectedRoutes';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Utilisateur non connecté */}
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Utilisateur connecté */}
            <Route element={<ProtectedRoutes />}>
              <Route element={<Dashboard />}>
                {/* Routes enfants */}
                <Route path="/" element={<PersonsGrid />} />
                <Route path="/persons/:personId" element={<PersonDetails />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
