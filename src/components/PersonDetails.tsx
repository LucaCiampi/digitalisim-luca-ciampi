import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import GoBackButton from './GoBackButton';

const PersonDetail: React.FC = () => {
  const { personId } = useParams();

  const person = {
    name: { first: 'John', last: 'Doe' },
    location: { city: 'New York', country: 'USA' },
    picture: { large: 'https://randomuser.me/api/portraits/men/1.jpg' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="person-detail"
    >
      {/* Bouton pour revenir à la page précédente */}
      <GoBackButton />
      <Typography variant="h3">
        {person.name.first} {person.name.last}
      </Typography>
      <Typography variant="h5">
        {person.location.city}, {person.location.country}
      </Typography>
      <img
        src={person.picture.large}
        alt={`${person.name.first} ${person.name.last}`}
      />
    </motion.div>
  );
};

export default PersonDetail;
