import {
  Drawer,
  List,
  ListItem,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
} from '@mui/material';
import FILTERS from '../../constants/filters';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

interface Props {
  genderFilter: string;
  setGenderFilter: (value: string) => void;
  countryFilter: string;
  setCountryFilter: (value: string) => void;
}

const Sidenav = ({
  genderFilter,
  setGenderFilter,
  countryFilter,
  setCountryFilter,
}: Props) => {
  const navigate = useNavigate();

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGenderFilter(event.target.value as string);
  };

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setCountryFilter(event.target.value as string);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#fafafa',
        },
      }}
    >
      <List>
        {/* Lien vers la page d'accueil */}
        <ListItem>
          <IconButton
            onClick={handleHomeClick}
            color="primary"
            aria-label="home"
          >
            <HomeIcon />
          </IconButton>
        </ListItem>

        {/* Filtre par sexe */}
        <ListItem>
          <FormControl fullWidth>
            <InputLabel>Sexe</InputLabel>
            <Select
              value={genderFilter}
              onChange={handleGenderChange}
              label="Sexe"
            >
              <MenuItem value="">
                <em>Tout</em>
              </MenuItem>
              {FILTERS.sex.map((sex) => (
                <MenuItem key={sex.value} value={sex.value}>
                  {sex.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        {/* Filtre par pays */}
        <ListItem>
          <FormControl fullWidth>
            <InputLabel>Pays</InputLabel>
            <Select
              value={countryFilter}
              onChange={handleCountryChange}
              label="Pays"
            >
              <MenuItem value="">
                <em>Tout</em>
              </MenuItem>
              {FILTERS.countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidenav;
