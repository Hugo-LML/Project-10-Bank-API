import { FC } from 'react';
import Input from '../../common/Input/Input';

const SignInForm: FC = () => {
  return (
    <section className='flex items-center justify-center bg-[#12002b]'>
      <form action='' className='mx-auto mb-20 mt-12 w-[300px] bg-white p-8'>
        <i className='fa fa-user-circle mx-auto w-full text-center'></i>
        <h1 className='my-5 text-center text-2xl font-bold'>Sign In</h1>
        <Input id='username' label='Username' type='text' />
        <Input id='password' label='Password' type='password' labelClassName='mt-4' />
        <div className='mt-4 flex items-center space-x-2'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button type='submit' className='bg-green mt-4 w-full px-2 py-1 text-center text-lg font-bold text-white underline'>
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInForm;
