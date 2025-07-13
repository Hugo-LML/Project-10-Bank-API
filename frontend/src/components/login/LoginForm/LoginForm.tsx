import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLoginMutation } from '../../../services/auth';
import { usersApi } from '../../../services/users';
import Input from '../../common/Input/Input';

const LoginForm: FC = () => {
  const [inputs, setInputs] = useState<{ username: string; password: string }>({ username: '', password: '' });

  const [login] = useLoginMutation();

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputs(values => ({ ...values, [id]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const response = await login({ email: inputs.username, password: inputs.password }).unwrap();
      localStorage.setItem('token', response.body.token);
      usersApi.util.invalidateTags(['User']);
      navigate('/profile');
    } catch (error) {
      console.log('Login failed:', error);
    }
  };

  return (
    <section className='flex items-center justify-center'>
      <form className='mx-auto mb-20 mt-12 w-[300px] bg-white p-8' onSubmit={handleSubmit}>
        <i className='fa fa-user-circle mx-auto w-full text-center'></i>
        <h1 className='my-5 text-center text-2xl font-bold'>Sign In</h1>
        <Input id='username' label='Username' type='text' value={inputs.username} onChange={handleChange} />
        <Input id='password' label='Password' type='password' labelClassName='mt-4' value={inputs.password} onChange={handleChange} />
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

export default LoginForm;
