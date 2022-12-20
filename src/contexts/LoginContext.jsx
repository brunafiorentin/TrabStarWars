import { createContext, useEffect, useState } from 'react';

export const LoginContext = createContext({
  login: false,
  setLogin: () => null,
  verificarLogin: () => null,
});

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const verificarLogin = () => {
    setLogin(localStorage.getItem('login'));
  };

  useEffect(() => {
    verificarLogin();
  }, []);

  const value = {
    login,
    setLogin,
    verificarLogin,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
