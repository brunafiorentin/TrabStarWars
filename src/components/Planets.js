import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import starWarsApi from '../services/starWarsApi';

const Planets = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await starWarsApi.get('/planets');
        setData([...data.results]);
      } catch (e) {
        toast.error(e)
      }

      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) return <h3>Carregando</h3>;

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell variant="head">Nome</TableCell>
          <TableCell variant="head">Clima</TableCell>
          <TableCell variant="head">População</TableCell>
          <TableCell variant="head">Duração do ano</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((film, index) => (
          <TableRow key={index} className="film">
            <TableCell>{film.name}</TableCell>
            <TableCell>{film.climate}</TableCell>
            <TableCell>{film.population}</TableCell>
            <TableCell>{film.orbital_period}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Planets;
