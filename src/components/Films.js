import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import starWarsApi from '../services/starWarsApi';

const Films = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await starWarsApi.get('/films');
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
          <TableCell variant="head">Título</TableCell>
          <TableCell variant="head">Diretor</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((film, index) => (
          <TableRow key={index} className="film">
            <TableCell>{film.title}</TableCell>
            <TableCell>{film.director}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Films;
