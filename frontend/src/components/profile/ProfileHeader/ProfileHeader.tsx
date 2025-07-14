import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useGetUserQuery, useUpdateUserMutation } from '../../../services/users';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { useAppDispatch, useAppSelector } from '../../../store';
import { uiActions } from '../../../features/ui/uiSlice';

const ProfileHeader: FC = () => {
  const { isEditing } = useAppSelector(state => state.ui.profile);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetUserQuery(undefined, { skip: !localStorage.getItem('token') });
  const { firstName, lastName } = data?.body || {};

  const [inputs, setInputs] = useState<{ firstName: string; lastName: string }>({ firstName: '', lastName: '' });

  useEffect(() => {
    if (firstName && lastName) setInputs({ firstName, lastName });
  }, [firstName, lastName]);

  const toggleEdit = () => dispatch(uiActions.setProfileEdit(!isEditing));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputs(values => ({ ...values, [id]: value }));
  };

  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await updateUser({ firstName: inputs.firstName, lastName: inputs.lastName }).unwrap();
      toggleEdit();
    } catch (error) {
      console.log('Update failed:', error);
    }
  };

  if (isLoading) {
    return <p className='text-white'>Loading...</p>;
  }

  return (
    <section className='mx-auto pt-4 text-white'>
      <h1 className='text-center text-[2rem] font-bold'>Welcome back</h1>
      {isEditing ? (
        <form className='mx-auto mt-2 max-w-[30rem] space-y-2' onSubmit={handleSubmit}>
          <div className='flex text-black'>
            <Input
              id='firstName'
              label='First Name'
              labelClassName='sr-only'
              placeholder='First Name'
              value={inputs.firstName}
              onChange={handleChange}
            />
            <Input
              id='lastName'
              label='Last Name'
              labelClassName='sr-only'
              inputClassName='ml-4'
              placeholder='Last Name'
              value={inputs.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-center'>
            <Button type='submit' className='w-28 p-1.5'>
              Save
            </Button>
            <Button onClick={toggleEdit} className='ml-4 w-28 p-1.5'>
              Cancel
            </Button>
          </div>
        </form>
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
