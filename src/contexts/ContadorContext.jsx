import { createContext, useEffect, useState } from 'react';

export const ContadorContext = createContext({
  contador: 0,
});

export const ContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(1);

  const handleAddContador = (total) => {
    setContador(total + 1);
    localStorage.setItem('contador', total + 1);
  };

  useEffect(() => {
    const total = localStorage.getItem('contador');

    !!total ? handleAddContador(+total) : localStorage.setItem('contador', 1);
  }, []);

  const value = {
    contador,
  };

  return (
    <ContadorContext.Provider value={value}>
      {children}
    </ContadorContext.Provider>
  );
};
