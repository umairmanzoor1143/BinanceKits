import Button from 'components/Button';
import './style.scss';
import '../../index.css';
import logo from '../../assets/images/logo.png';

function header() {
  return (
    <>
      <nav className='navbar'>
        <div>
          <a href='#'>
            <img src={logo} width={172} alt='Logo' />
          </a>
        </div>
        <div className='menu'>
          <ul>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>
                <Button size='small' rounded variant='secondary'>
                  Log In
                </Button>
              </a>
            </li>
            <li>
              <a href='#'>
                <Button size='small' rounded>
                  Sign Up
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default header;
