import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import starWarsApi from '../services/starWarsApi';

const Species = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await starWarsApi.get('/species');
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
          <TableCell variant="head">Altura média</TableCell>
          <TableCell variant="head">Tempo de vida médio</TableCell>
          <TableCell variant="head">Classifiação</TableCell>
          <TableCell variant="head">Linguagem</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((film, index) => (
          <TableRow key={index} className="film">
            <TableCell>{film.name}</TableCell>
            <TableCell>{film.average_height}</TableCell>
            <TableCell>{film.average_lifespan}</TableCell>
            <TableCell>{film.classification}</TableCell>
            <TableCell>{film.language}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Species;
