import Scrollbar from 'components/Scrollbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';
const AuthWrapper = () => {
  return (
    <Scrollbar className='authpage-scroll'>
      <Outlet />
    </Scrollbar>
  );
};

export default AuthWrapper;
