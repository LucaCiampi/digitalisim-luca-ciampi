import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonsGrid from './components/PersonsGrid';
import Sidenav from './components/Sidenav';
import PersonDetails from './components/PersonDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidenav />
        <div className="content">
          <Routes>
            <Route path="/" element={<PersonsGrid />} />
            <Route path="/persons/:personId" element={<PersonDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
