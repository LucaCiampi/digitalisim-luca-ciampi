import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="text"
      onClick={() => navigate(-1)}
      sx={{ marginTop: '1rem' }}
    >
      Retour
    </Button>
  );
};

export default GoBackButton;
