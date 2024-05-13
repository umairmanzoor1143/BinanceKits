import Scrollbar from 'components/Scrollbar';
import Header from 'components/Header/header';
import React from 'react';
import Home from '../../../pages/Home/home';
import { Outlet } from 'react-router-dom';
import './style.scss';
const AuthWrapper = () => {
  return (
    <>
      <Scrollbar className='authpage-scroll'>
        <Outlet />
        <Header />
        <Home />
      </Scrollbar>
    </>
  );
};

export default AuthWrapper;
