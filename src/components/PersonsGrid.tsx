import { motion } from 'framer-motion';
import usePersons from '../hooks/usePersons';
import PersonCard from './PersonCard';
import { useState } from 'react';
import PersonsGridOptions from './PersonsGridOptions';
import { SelectChangeEvent } from '@mui/material';
import useFilteredPersons from '../hooks/useFilteredPersons';

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

  const filteredPersons = useFilteredPersons({
    persons,
    genderFilter,
    countryFilter,
    searchQuery,
    sortOrder,
  });

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
