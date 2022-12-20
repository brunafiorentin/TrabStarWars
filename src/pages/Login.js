import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import loginService from '../services/AtenticadorService';
import { LoginContext } from '../contexts/LoginContext';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();

  const [lembrarme, setLembrarme] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { verificarLogin } = useContext(LoginContext);

  useLayoutEffect(() => {
    if (localStorage.getItem('email')) {
      setEmail(localStorage.getItem('email'));
      setPassword(localStorage.getItem('password'));
      setLembrarme(true);
    }
  }, []);

  const validar = async () => {
    try {
      await loginService(email, password);
      localStorage.setItem('login', true);
      verificarLogin();
      navigate('/menu');
    } catch (error) {
      toast.error(error);
    }
  };

  const armazenarEmailSenha = () => {
    setLembrarme(!lembrarme);
    if (!lembrarme) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  };

  const limpar = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className='login-container'>
      <Grid item xs={12}>
        <div style={{ textAlign: 'center', color:"white" }}>
          <h1>Sejam Bem-Vindos</h1>
          <h2>STAR WARS APP</h2>
        </div>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sm={12}
        style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, width: 600, marginTop: 30 }}
      >
        <div style={{ marginBottom: 10 }}>
          <TextField
            label="E-mail"
            fullWidth={true}
            variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Password"
            fullWidth={true}
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={lembrarme} onChange={armazenarEmailSenha} />
              }
              label="Lembrar-me"
            />
          </FormGroup>
        </div>
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            onClick={validar}
          >
            Entrar
          </Button>
          <Button variant="outlined" onClick={limpar}>
            Cancelar
          </Button>
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12}></Grid>
    </div>
  );
}
