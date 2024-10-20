import { motion } from 'framer-motion';
import usePersons from '../hooks/usePersons';
import PersonCard from './PersonCard';
import { useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  genderFilter: string;
  countryFilter: string;
}

const PersonsGrid = ({ genderFilter, countryFilter }: Props) => {
  const { persons, loading, error } = usePersons();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredPersons = useMemo(() => {
    let filtered = persons;

    if (genderFilter) {
      filtered = filtered.filter((person) => person.gender === genderFilter);
    }

    if (countryFilter) {
      filtered = filtered.filter(
        (person) => person.location.country === countryFilter
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((person) =>
        `${person.name.first} ${person.name.last}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [persons, genderFilter, countryFilter, searchQuery]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur: {error}</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="persons-grid"
    >
      <div className="persons-grid__top">
        <TextField
          label="Rechercher"
          variant="standard"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="persons-grid__elements">
        {filteredPersons.map((person, index) => (
          <PersonCard key={person.id.value ?? index} person={person} />
        ))}
      </div>
    </motion.div>
  );
};

export default PersonsGrid;
