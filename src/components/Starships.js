import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import starWarsApi from '../services/starWarsApi';

const Starships = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await starWarsApi.get('/starships');
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
          <TableCell variant="head">Capacidade</TableCell>
          <TableCell variant="head">Custo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((film, index) => (
          <TableRow key={index} className="film">
            <TableCell>{film.name}</TableCell>
            <TableCell>{film.cargo_capacity}</TableCell>
            <TableCell>{film.cost_in_credits}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Starships;
