import AddLogoIcon from 'assets/svgs/AppLogo';
import Button from 'components/Button';
import React from 'react';
import './style.scss';
const Header = () => {
  return (
    <div className='nav-bar'>
      <AddLogoIcon width={150} fill={'var(--color-primary)'} />
      <div className='right-side'>
        <Button variant='text' size='small'>
          Blog
        </Button>
        <Button variant='secondary' rounded size='small'>
          Log In
        </Button>
        <Button rounded size='small'>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;
