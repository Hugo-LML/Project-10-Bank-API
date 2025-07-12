import { FC } from 'react';
import Layout from '../components/layout/Layout';
import HomeHero from '../components/home/HomeHero/HomeHero';
import HomeFeatures from '../components/home/HomeFeatures/HomeFeatures';

const Home: FC = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
    </Layout>
  );
};

export default Home;
