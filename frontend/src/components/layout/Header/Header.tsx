import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <header className='text-black-light flex items-center justify-between bg-white px-5 py-[5px]'>
      <img src='/assets/images/argentBankLogo.png' alt='argent bank logo' className='w-[200px]' />
      <nav>
        {isLoggedIn ? (
          <Link to='/' className='group flex items-center space-x-1' onClick={() => localStorage.removeItem('token')}>
            <i className='fa fa-sign-out' color='#000'></i>
            <span className='font-bold group-hover:underline'>Sign Out</span>
          </Link>
        ) : (
          <Link to='/login' className='group flex items-center space-x-1'>
            <i className='fa fa-user-circle' color='#000'></i>
            <span className='font-bold group-hover:underline'>Sign In</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
