// @flow

import React, { memo, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children: any,
  customClass?: string,
};

const MainLayout = ({ children, customClass = '' }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`main-layout ${customClass}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.defaultProps = {
  customClass: '',
};
export default memo<Props>(MainLayout);
