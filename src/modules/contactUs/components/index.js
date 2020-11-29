/* eslint-disable no-nested-ternary */
// @flow
import React from 'react';
import MainLayout from '../../../commons/components/MainLayout';
import IMAGES from '../../../themes/images';

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="page-client contact-us">
        <div
          className="bg-page-title"
          style={{
            backgroundImage: `url(${IMAGES.bg_title_client})`,
          }}
        />
        <div className="container">
          <div className="page-title">LIÊN HỆ</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
