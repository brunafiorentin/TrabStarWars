import { Avatar } from '@mui/material';
import React from 'react';
import ProfileImage from '../assets/images/profile.jpg';
import { LinkedIn, GitHub } from '@mui/icons-material'

const About = () => {
  return (
    <div className="about">
      <Avatar sx={{width: 150, height: 150, objectPosition: 'top'}} style={{objectPosition: 'top'}} alt="Remy Sharp" src={ProfileImage} />
      <h1>Bruna Fiorentin Yamauti Doi</h1>
      <p>Acadêmica de Ciência da Computação</p>
      <p>Passo Fundo - RS</p>
      <div className='link-group'>
        <a href='https://www.linkedin.com/in/bruna-fiorentin-yamauti-doi-a88657197/' target='_blank'><LinkedIn/></a>
        <a href='https://github.com/brunafiorentin' target='_blank'><GitHub/></a>
      </div>
    </div>
  );
};

export default About;
