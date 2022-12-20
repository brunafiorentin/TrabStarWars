import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundImage from '../assets/images/not-found.svg';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="not-found__container">
      <h1>Página não encontrada!</h1>
      <img src={NotFoundImage} alt="Página não encontrada" />
      <button onClick={handleBack}>Voltar</button>
    </div>
  );
};

export default NotFound;
