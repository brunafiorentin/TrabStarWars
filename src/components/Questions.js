import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { salvarDuvidas } from '../services/BancoService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Questions = () => {

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      await salvarDuvidas(values);
      navigate('/')
      toast.success('Dúvida enviada com sucesso')
    } catch (e) {
      toast.error('Ocorreu um erro ao enviar a dúvida!')
    }
  };

  const { handleSubmit, errors, values, handleChange } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      question: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Esse campo é obrigatório!'),
      phone: yup
        .number()
        .typeError('Digite apenas números!')
        .required('Esse campo é obrigatório!'),
      question: yup.string().required('Esse campo é obrigatório!'),
    }),
    onSubmit,
  });

  return (
    <div className="question-container">
      <h1>Insira sua dúvida</h1>
      <form className="question-container__form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Informe o seu nome"
          variant="outlined"
          name={'name'}
          error={!!errors.name}
          helperText={errors.name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Informe o seu número"
          variant="outlined"
          name={'phone'}
          type="text"
          error={!!errors.phone}
          helperText={errors.phone}
          onChange={handleChange}
        />
        <TextField
          multiline
          minRows={10}
          id="outlined-basic"
          label="Informe a sua dúvida"
          variant="outlined"
          name={'question'}
          error={!!errors.question}
          helperText={errors.question}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Questions;
