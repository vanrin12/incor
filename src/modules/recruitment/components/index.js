/* eslint-disable no-nested-ternary */
// @flow
import React from 'react';
import MainLayout from '../../../commons/components/MainLayout';
import IMAGES from '../../../themes/images';

const RecruitmentPage = () => {
  return (
    <MainLayout headTitle="Tuyển dụng">
      <div className="page-client page-recruitment">
        <div
          className="bg-page-title"
          style={{
            backgroundImage: `url(${IMAGES.bg_title_client})`,
          }}
        />
        <div className="container">
          <div className="page-title">TUYỂN DỤNG</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RecruitmentPage;
