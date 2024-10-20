import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FILTERS from '../constants/filters';

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
  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGenderFilter(event.target.value as string);
  };

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setCountryFilter(event.target.value as string);
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
        },
      }}
    >
      <List>
        {/* Lien vers la page d'accueil */}
        <ListItem component={Link} to="/">
          <ListItemText primary="Accueil" />
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
              <MenuItem value="male">Homme</MenuItem>
              <MenuItem value="female">Femme</MenuItem>
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
