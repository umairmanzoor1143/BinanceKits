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
                <Button text='Login' btntext='' />
              </a>
            </li>
            <li>
              <a href='#'>
                <Button text='Start for free' btntext='' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default header;
