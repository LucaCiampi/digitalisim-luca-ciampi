import './App.css';
import PersonsGrid from './components/PersonsGrid';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <div className="content">
        <PersonsGrid />
      </div>
    </div>
  );
}

export default App;
