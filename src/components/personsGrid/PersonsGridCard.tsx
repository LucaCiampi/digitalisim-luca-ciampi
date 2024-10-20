import { Person } from '../../types/Person';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  person: Person;
}

const PersonsGridCard = ({ person }: Props) => {
  const navigate = useNavigate();

  /**
   * Redirects user to person detailed profile view on click
   */
  const handleClick = () => {
    /* L'API publique ne me renvoie pas toujours d'ID, 
    il s'agit donc d'une solution moins viable 
    que d'utiliser le prénom et nom de famille */
    navigate(`/persons/${person.name.first}-${person.name.last}`, {
      state: { person },
    });
  };

  return (
    <Card sx={{ width: 384, cursor: 'pointer' }} onClick={handleClick}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Avatar
          alt={`${person.name.first} ${person.name.last}`}
          src={person.picture.large}
          sx={{ width: 128, height: 128 }}
        />
        <div>
          <Typography variant="h5" component="div">
            {person.name.first} {person.name.last}
          </Typography>
          <Typography
            marginBottom={1}
            variant="body2"
            sx={{ color: 'text.secondary' }}
          >
            {person.location.city}, {person.location.country}
          </Typography>
          <Button onClick={handleClick} size="small" variant="contained">
            Voir plus
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonsGridCard;
