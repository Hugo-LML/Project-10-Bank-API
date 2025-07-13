import { FC } from 'react';
import Layout from '../components/layout/Layout';
import ProfileHeader from '../components/profile/ProfileHeader/ProfileHeader';
import ProfileAccounts from '../components/profile/ProfileAccounts/ProfileAccounts';

const Profile: FC = () => {
  return (
    <Layout className='bg-blue'>
      <ProfileHeader />
      <ProfileAccounts />
    </Layout>
  );
};

export default Profile;
