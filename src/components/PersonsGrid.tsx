import usePersons from '../hooks/usePersons';
import PersonCard from './PersonCard';

const PersonsGrid = () => {
  const { persons, loading, error } = usePersons();

  // Gestion de l'état de chargement
  if (loading) {
    return <p>Chargement...</p>;
  }

  // Gestion des erreurs
  if (error) {
    return <p>Erreur: {error}</p>;
  }

  console.log(persons);

  // Affichage des personnages
  return (
    <div>
      {persons.map((person, index) => (
        <PersonCard key={person.id.value ?? index} person={person} />
      ))}
    </div>
  );
};

export default PersonsGrid;
