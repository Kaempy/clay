'use client';
import { useSearchParams } from 'next/navigation';
import { Fragment, ReactNode } from 'react';
import Menu from './menu';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  const params = useSearchParams();
  return (
    <Fragment>
      <Navbar />
      {params.get('menu') === 'true' ? <Menu /> : children}
    </Fragment>
  );
};

export default Layout;
