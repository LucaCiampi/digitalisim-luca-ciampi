import { motion } from 'framer-motion';
import usePersons from '../hooks/usePersons';
import PersonCard from './PersonCard';
import { useMemo, useState } from 'react';
import PersonsGridOptions from './PersonsGridOptions';
import { SelectChangeEvent } from '@mui/material';

interface Props {
  genderFilter: string;
  countryFilter: string;
}

const PersonsGrid = ({ genderFilter, countryFilter }: Props) => {
  const { persons, loading, error } = usePersons();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortOrder(event.target.value as string);
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

    // Tri
    if (sortOrder === 'asc') {
      filtered = filtered.sort((a, b) =>
        `${a.name.first} ${a.name.last}`.localeCompare(
          `${b.name.first} ${b.name.last}`
        )
      );
    } else if (sortOrder === 'desc') {
      filtered = filtered.sort((a, b) =>
        `${b.name.first} ${b.name.last}`.localeCompare(
          `${a.name.first} ${a.name.last}`
        )
      );
    }

    return filtered;
  }, [persons, genderFilter, countryFilter, searchQuery, sortOrder]);

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
      <PersonsGridOptions
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        sortOrder={sortOrder}
        handleSortChange={handleSortChange}
      />
      <div className="persons-grid__elements">
        {filteredPersons.map((person, index) => (
          <PersonCard key={person.id.value ?? index} person={person} />
        ))}
      </div>
    </motion.div>
  );
};

export default PersonsGrid;
