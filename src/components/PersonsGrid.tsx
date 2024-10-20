import { motion } from 'framer-motion';
import usePersons from '../hooks/usePersons';
import PersonCard from './PersonCard';
import { useMemo } from 'react';

interface Props {
  genderFilter: string;
  countryFilter: string;
}

const PersonsGrid = ({ genderFilter, countryFilter }: Props) => {
  const { persons, loading, error } = usePersons();

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

    return filtered;
  }, [persons, genderFilter, countryFilter]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur: {error}</p>;
  }

  return (
    <motion.div
      className="persons-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {filteredPersons.map((person, index) => (
        <PersonCard key={person.id.value ?? index} person={person} />
      ))}
    </motion.div>
  );
};

export default PersonsGrid;
