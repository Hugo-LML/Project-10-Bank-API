import { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import clsx from 'clsx';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

const Layout: FC<LayoutProps> = ({ className = '', children }) => {
  return (
    <>
      <Header />
      <main className={clsx('text-black-light', className)}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
