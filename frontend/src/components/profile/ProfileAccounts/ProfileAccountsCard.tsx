import { FC } from 'react';
import { Account } from '../../../types';
import Button from '../../common/Button/Button';

interface ProfileAccountsCardProps {
  account: Account;
}

const ProfileAccountsCard: FC<ProfileAccountsCardProps> = ({ account }) => {
  return (
    <div className='flex items-center justify-between border border-black bg-white p-6'>
      <div className='flex flex-col'>
        <h3>{account.name}</h3>
        <span className='text-[2.5rem] font-bold leading-[2.5rem]'>${account.balance}</span>
        <span>Available Balance</span>
      </div>
      <Button className='w-[200px] text-lg font-bold py-1.5'>
        View transactions
      </Button>
    </div>
  );
};

export default ProfileAccountsCard;
