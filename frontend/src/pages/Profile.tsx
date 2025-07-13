import { FC } from 'react';
import Layout from '../components/layout/Layout';
import ProfileAccounts from '../components/profile/ProfileAccounts/ProfileAccounts';
import ProfileHeader from '../components/profile/ProfileHeader/ProfileHeader';

const Profile: FC = () => {
  return (
    <Layout className='bg-blue'>
      <ProfileHeader />
      <ProfileAccounts />
    </Layout>
  );
};

export default Profile;
