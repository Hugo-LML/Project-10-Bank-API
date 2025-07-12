import { FC } from 'react';

const HomeHero: FC = () => {
  return (
    <section className='relative h-[400px] bg-[url("/assets/images/bank-tree.jpeg")] bg-cover bg-[0%_33%]'>
      <div className='absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 bg-white p-8 md:left-auto md:right-[50px] md:top-[50px] md:m-8 md:w-[364px] md:translate-x-0 md:translate-y-0'>
        <p className='text-2xl font-bold text-black'>No fees.</p>
        <p className='text-2xl font-bold text-black'>No minimum desposit.</p>
        <p className='text-2xl font-bold text-black'>High interest rates.</p>
        <p className='mt-5 text-xl'>Open a savings account with Argent Bank today!</p>
      </div>
    </section>
  );
};

export default HomeHero;
