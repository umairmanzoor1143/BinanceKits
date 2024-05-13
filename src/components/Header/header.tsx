import Button from 'components/Button';
import './style.scss';
import '../../index.css';

function header() {
  return (
    <>
      <nav className='navbar'>
        <div>
          <a href='#'>
            <img src='assets/images/logo.png' alt='Logo' />
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
