import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidenav from '../layout/Sidenav';

function Dashboard() {
  // États pour les filtres
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [countryFilter, setCountryFilter] = useState<string>('');

  return (
    <div className="dashboard">
      <Sidenav
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
      />
      <div className="dashboard__content">
        <Outlet context={{ genderFilter, countryFilter }} />
      </div>
    </div>
  );
}

export default Dashboard;
