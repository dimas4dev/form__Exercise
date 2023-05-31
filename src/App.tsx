import { useState } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.scss'

import Login from './pages/Login';

import Home from './pages/Home';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleLogin = () => {
    setOpenModal(true);
    setIsLoggedIn(true);
  };

  const AppRoutes = () => {
    const routes = useRoutes([
      { path: '/', element: <Login onLogin={handleLogin} openModal={openModal} setOpenModal={setOpenModal} /> },
      { path: '/home', element: <Home /> },
    ]);
    return routes;
  }

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </>
  );
};

export default App
