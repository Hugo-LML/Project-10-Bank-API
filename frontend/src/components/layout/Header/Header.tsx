import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className='bg-white py-[5px] px-5 flex justify-between items-center text-black-light'>
      <img src='/assets/images/argentBankLogo.png' alt='argent bank logo' className='w-[200px]' />
      <nav>
        <Link to='/sign-in' className='flex items-center space-x-1 group'>
          <i className='fa fa-user-circle' color='#000'></i>
          <span className='group-hover:underline font-bold'>Sign In</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
