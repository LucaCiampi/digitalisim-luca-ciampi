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

  /**
   * Handles changes in the gender dropdown and updates the gender filter state.
   *
   * @param event - The selection change event from the gender dropdown
   */
  const handleGenderChange = (event: SelectChangeEvent<string>): void => {
    setGenderFilter(event.target.value as string);
  };

  /**
   * Handles changes in the country dropdown and updates the country filter state.
   *
   * @param event - The selection change event from the country dropdown
   */
  const handleCountryChange = (event: SelectChangeEvent<string>): void => {
    setCountryFilter(event.target.value as string);
  };

  /**
   * Handles the click event for navigating to the home page.
   */
  const handleHomeClick = (): void => {
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
