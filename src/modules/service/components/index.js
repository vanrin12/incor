/* eslint-disable no-nested-ternary */
// @flow
import React from 'react';
import MainLayout from '../../../commons/components/MainLayout';
import IMAGES from '../../../themes/images';

const ServicePage = () => {
  return (
    <MainLayout headTitle="Dịch vụ">
      <div className="page-client">
        <div
          className="bg-page-title"
          style={{
            backgroundImage: `url(${IMAGES.bg_title_client})`,
          }}
        />
        <div className="container">
          <div className="page-title">DỊCH VỤ</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicePage;
