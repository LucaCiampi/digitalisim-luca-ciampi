import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

interface Props {
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortOrder: string;
  handleSortChange: (event: SelectChangeEvent) => void;
}

const PersonsGridOptions = ({
  searchQuery,
  handleSearchChange,
  sortOrder,
  handleSortChange,
}: Props) => {
  return (
    <div className="persons-grid__top">
      {/* Barre de recherche */}
      <TextField
        label="Rechercher"
        variant="standard"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginRight: '1rem' }}
      />

      {/* Sélecteur de tri */}
      <FormControl variant="standard" style={{ minWidth: 120 }}>
        <InputLabel>Tri</InputLabel>
        <Select value={sortOrder} onChange={handleSortChange} label="Tri">
          <MenuItem value="">
            <em>Ne pas trier</em>
          </MenuItem>
          <MenuItem value="asc">Ordre alphabétique croissant</MenuItem>
          <MenuItem value="desc">Ordre alphabétique décroissant</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PersonsGridOptions;
