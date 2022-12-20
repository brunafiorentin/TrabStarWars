import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import starWarsApi from '../services/starWarsApi';

const People = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await starWarsApi.get('/people');
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
          <TableCell variant="head">Altura</TableCell>
          <TableCell variant="head">Peso</TableCell>
          <TableCell variant="head">Gênero</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((film, index) => (
          <TableRow key={index} className="film">
            <TableCell>{film.name}</TableCell>
            <TableCell>{film.height}</TableCell>
            <TableCell>{film.mass}</TableCell>
            <TableCell>{film.gender}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default People;
