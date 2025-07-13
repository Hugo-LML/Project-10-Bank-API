import { FC } from 'react';
import { Account } from '../../../types';
import ProfileAccountsCard from './ProfileAccountsCard';

const accounts: Account[] = [
  { id: 1, name: 'Argent Bank Checking (x8349)', balance: '2,082.79' },
  { id: 2, name: 'Argent Bank Savings (x6712)', balance: '10,928.42' },
  { id: 3, name: 'Argent Bank Credit Card (x8349)', balance: '184.30' },
]

const ProfileAccounts: FC = () => {
  return (
    <section className='py-8 max-w-[1000px] mx-auto space-y-8'>
      {accounts.map(account => (
        <ProfileAccountsCard key={account.id} account={account} />
      ))}
    </section>
  );
};

export default ProfileAccounts;
