// @flow

import React, { memo } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children: any,
  customClass?: string,
};

const MainLayout = ({ children, customClass = '' }: Props) => {
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
