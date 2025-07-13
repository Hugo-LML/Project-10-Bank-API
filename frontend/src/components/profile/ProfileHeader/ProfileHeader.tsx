import { FC, useState } from 'react';
import { useGetUserQuery } from '../../../services/users';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const ProfileHeader: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { data, isLoading } = useGetUserQuery(undefined, { skip: !localStorage.getItem('token') });
  const { firstName, lastName } = data?.body || {};

  const toggleEdit = () => setIsEditing(!isEditing);

  const onSave = () => {
    console.log('Profile saved');
    toggleEdit();
  };

  if (isLoading) {
    return <p className='text-white'>Loading...</p>;
  }

  return (
    <section className='mx-auto pt-4 text-white'>
      <h1 className='text-center text-[2rem] font-bold'>Welcome back</h1>
      {isEditing ? (
        <div className='mx-auto mt-2 max-w-[30rem] space-y-2'>
          <div className='flex'>
            <Input id='first-name' label='First Name' labelClassName='sr-only' placeholder={firstName} />
            <Input id='last-name' label='Last Name' labelClassName='sr-only' inputClassName='ml-4' placeholder={lastName} />
          </div>
          <div className='flex justify-center'>
            <Button onClick={onSave} className='w-28 p-1.5'>
              Save
            </Button>
            <Button onClick={toggleEdit} className='ml-4 w-28 p-1.5'>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center space-y-6'>
          <h2 className='text-[2rem] font-bold leading-5'>
            {firstName} {lastName}!
          </h2>
          <Button className='text-sm' onClick={toggleEdit}>
            Edit Name
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProfileHeader;
