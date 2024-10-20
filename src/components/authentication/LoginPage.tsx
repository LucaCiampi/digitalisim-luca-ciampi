import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div className="login-page">
      <h2>Connexion</h2>
      <Button variant="contained" onClick={handleLogin}>
        Se connecter
      </Button>
    </div>
  );
}

export default LoginPage;
