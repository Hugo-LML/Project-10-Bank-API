import { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='text-black-light'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
