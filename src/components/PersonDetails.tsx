import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Person } from '../types/Person';
import GoBackButton from './GoBackButton';
import Avatar from '@mui/material/Avatar';

const PersonDetail: React.FC = () => {
  const location = useLocation();
  const { person } = location.state as { person: Person };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="person-detail"
    >
      <GoBackButton />
      <div>
        <Avatar
          alt={`${person.name.first} ${person.name.last}`}
          src={person.picture.large}
          sx={{ width: 128, height: 128 }}
        />
        <Typography variant="h3">
          {person.name.first} {person.name.last}
        </Typography>
        <Typography variant="h5">
          {person.location.city}, {person.location.country}
        </Typography>
        <Typography>{person.email}</Typography>
      </div>
    </motion.div>
  );
};

export default PersonDetail;
