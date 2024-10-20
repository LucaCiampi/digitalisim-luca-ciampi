import { Person } from '../types/Person';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

interface Props {
  person: Person;
}

const personChard = ({ person }: Props) => (
  <Card sx={{ width: 384 }}>
    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar
        alt={`${person.name.first} ${person.name.last}`}
        src={person.picture.large}
        sx={{ width: 128, height: 128 }}
      />
      <div>
        <Typography gutterBottom variant="h5" component="div">
          {person.name.first} {person.name.last}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {person.location.city}, {person.location.country}
        </Typography>
        {/* Il n'y a as toujours d'ID dans l'API, je dois donc passer par cette option moins stable */}
        <Button
          href={`/persons/${person.name.first}-${person.name.last}`}
          size="small"
          variant="contained"
        >
          Voir plus
        </Button>
      </div>
    </CardContent>
  </Card>
);
export default personChard;
