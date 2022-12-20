import React, { useContext } from 'react';
import { ContadorContext } from '../contexts/ContadorContext';

export default function Cabecalho() {
  const { contador } = useContext(ContadorContext);

  return (
    <div className="cabecalho">
      <h1 style={{ color: 'white', fontSize: 80 }}>STAR WARS APP</h1>
      <span className="contador">Contador: {contador}</span>
    </div>
  );
}
