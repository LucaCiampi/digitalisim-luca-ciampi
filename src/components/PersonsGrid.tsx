import { motion } from 'framer-motion';
import usePersons from '../hooks/usePersons';
import PersonCard from './PersonCard';

const PersonsGrid = () => {
  const { persons, loading, error } = usePersons();

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
      {persons.map((person, index) => (
        <PersonCard key={person.id.value ?? index} person={person} />
      ))}
    </motion.div>
  );
};

export default PersonsGrid;
