import { FC } from 'react';
import Layout from '../components/layout/Layout';
import LoginForm from '../components/login/LoginForm/LoginForm';

const Login: FC = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default Login;
