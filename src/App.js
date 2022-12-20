import { useContext } from 'react';
import './assets/css/estilos.css';
import { LoginContext } from './contexts/LoginContext';
import { PrivateRoutes, PublicRoutes } from './routes';

function App() {
  const { login } = useContext(LoginContext);

  return login ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
