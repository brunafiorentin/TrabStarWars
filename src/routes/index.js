import Login from '../pages/Login';
import Menu from '../pages/Menu';
import NotFound from '../pages/NotFound';

import Home from '../components/Home';
import Films from '../components/Films';
import Starships from '../components/Starships';
import People from '../components/People';
import Planets from '../components/Planets';
import Species from '../components/Species';
import Questions from '../components/Questions';
import About from '../components/About';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const PrivateRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/menu" />} />
      <Route path="/menu" element={<Menu />}>
        <Route index element={<Home />} />
        <Route path="films" element={<Films />} />
        <Route path="starships" element={<Starships />} />
        <Route path="people" element={<People />} />
        <Route path="planets" element={<Planets />} />
        <Route path="species" element={<Species />} />
        <Route path="duvidas" element={<Questions />} />
        <Route path="sobre" element={<About />} />
        <Route path="*" element={<h1>Menu não encontrado</h1>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export const PublicRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Navigate to="/" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
