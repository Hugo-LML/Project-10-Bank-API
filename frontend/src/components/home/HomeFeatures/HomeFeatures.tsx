import { FC } from 'react';

const features = [
  {
    icon: '/assets/images/icon-chat.png',
    title: 'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: '/assets/images/icon-money.png',
    title: 'More savings means higher rates',
    description: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: '/assets/images/icon-security.png',
    title: 'Security you can trust',
    description: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

const HomeFeatures: FC = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3'>
      {features.map((feature, index) => (
        <div key={index} className='flex flex-col items-center p-10'>
          <img src={feature.icon} alt={feature.title} className='size-[100px] rounded-full border-[10px] border-green p-4 box-content' />
          <h3 className='mt-4 text-xl font-bold text-center text-[#222]'>{feature.title}</h3>
          <p className='text-center my-4'>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default HomeFeatures;
