import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import './appBodyScroll.scss';
import './appLayout.scss';
import Header from './components/Header';

const AppWapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`main-container h-100 ${className}`}>
      <div className='app_layout h-100'>
        <Header />
        {children}
      </div>
    </div>
  );
};
const AppLayout = ({ className }: { className?: string }) => {
  return (
    <AppWapper className={className}>
      <div className='app-content'>
        <Outlet />
      </div>
    </AppWapper>
  );
};

export default AppLayout;
