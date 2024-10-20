import { motion } from 'framer-motion';
import usePersons from '../../hooks/usePersons';
import PersonsGridCard from './PersonsGridCard';
import { useState } from 'react';
import PersonsGridOptions from './PersonsGridOptions';
import { SelectChangeEvent } from '@mui/material';
import useFilteredPersons from '../../hooks/useFilteredPersons';

interface Props {
  genderFilter: string;
  countryFilter: string;
}

const PersonsGrid = ({ genderFilter, countryFilter }: Props) => {
  const { persons, loading, error } = usePersons();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');

  /**
   * Handles changes in the search input field and updates the search query state.
   *
   * @param event - The input change event
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  /**
   * Handles changes in the sort dropdown and updates the sort order state.
   *
   * @param event - The selection change event from the dropdown
   */
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
          <PersonsGridCard key={person.id.value ?? index} person={person} />
        ))}
      </div>
    </motion.div>
  );
};

export default PersonsGrid;
