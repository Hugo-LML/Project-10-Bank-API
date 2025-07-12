import { FC } from 'react';
import Layout from '../components/layout/Layout';
import SignInForm from '../components/sign-in/SignInForm/SignInForm';

const SignIn: FC = () => {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
};

export default SignIn;
