import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Person } from '../types/Person';
import GoBackButton from './GoBackButton';
import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';

const PersonDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { person } = location.state as { person: Person };

  useEffect(() => {
    // Si la personne n'existe pas (l'utilisateur a accédé directement à l'URL), on redirige vers la grille
    if (!person) {
      navigate('/');
    }
  }, [person, navigate]);

  // Affichage conditionnel si la personne n'est pas encore chargée
  if (!person) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="person-detail"
    >
      <GoBackButton />
      <div className="person-detail__content">
        <Avatar
          alt={`${person.name.first} ${person.name.last}`}
          src={person.picture.large}
          sx={{ width: 128, height: 128 }}
        />
        <Typography variant="h3" gutterBottom>
          {person.name.first} {person.name.last}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {person.location.city}, {person.location.country}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <strong>Genre :</strong>{' '}
          {person.gender === 'male' ? 'Homme' : 'Femme'}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <strong>Email :</strong> {person.email}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <strong>Date de naissance :</strong>{' '}
          {new Date(person.dob.date).toLocaleDateString()} (Âge :{' '}
          {person.dob.age} ans)
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <strong>Téléphone :</strong> {person.phone}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <strong>Adresse :</strong> {person.location.street.number},{' '}
          {person.location.street.name}, {person.location.city},{' '}
          {person.location.state}, {person.location.postcode},{' '}
          {person.location.country}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <strong>Identifiant :</strong> {person.id.value || 'Non disponible'}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <strong>Nationalité :</strong> {person.nat}
        </Typography>
      </div>
    </motion.div>
  );
};

export default PersonDetail;
