import React, { useEffect, useState } from 'react';
import { getDuvidas } from '../services/BancoService';

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDuvidas = async () => {
      const result = await getDuvidas();
      setData([...result]);
    };

    fetchDuvidas();
  }, []);

  return (
    <div className="home">
      <h1>Dúvidas</h1>
      <ul className="question-list">
        {data?.map((question) => (
          <li key={question.id}>{question.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
