import { Grid, TableContainer } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import MenuOpcoes from '../components/MenuOpcoes';
import { pegarGamers, deleteGamer } from '../services/BancoService';
import Table from '@mui/material/Table';
import { Outlet } from 'react-router-dom';
import Paper from '@mui/material/Paper';

export default function Menu() {
  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <MenuOpcoes />
          <div className="corpo">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <Outlet />
              </Table>
            </TableContainer>
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>
  );
}
