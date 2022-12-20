import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

export const menus = [
  { label: 'Home', path: '' },
  { label: 'Films', path: 'films' },
  { label: 'Starships', path: 'starships' },
  { label: 'People', path: 'people' },
  { label: 'Planets', path: 'planets' },
  { label: 'Species', path: 'species' },
  { label: 'Dúvidas', path: 'duvidas' },
  { label: 'Sobre', path: 'sobre' },
];
export default function MenuOpcoes() {
  const navigate = useNavigate();

  const { setLogin } = useContext(LoginContext);


  const logoff = () => {
    setLogin(false);
    localStorage.removeItem('login');
    navigate('/');
  };
  return (
    <div className="menu">
      {menus.map(({ label, path }) => (
        <Link to={path} key={path} className="itemMenu">
          {label}
        </Link>
      ))}
      <p className="itemMenu" onClick={logoff}>
        Logoff
      </p>
    </div>
  );
}
