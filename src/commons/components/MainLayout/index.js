// @flow

import React, { memo, useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import ModalPopup from 'commons/components/Modal';
import Favicon from 'react-favicon';
import Button from 'commons/components/Button';
import FormContactUs from 'commons/components/Form/FormContactUs';
import FormContactUsMobile from 'commons/components/Form/FormContacUsMobile';
import ERROR_MESSAGE from 'constants/errorMsg';
import IMAGES from 'themes/images';
import { useSelector, useDispatch } from 'react-redux';
import {
  getListAreas,
  getListSpaceType,
  getListHashTag,
  getDataPageHome,
} from 'modules/home/redux';

import { getDetailLayout, getListPartner } from 'commons/redux';
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children: any,
  customClass?: string,
  isShowModalContact?: any,
  description?: string,
  headTitle?: string,
  dataSeo?: Object,
};

const MainLayout = ({
  children,
  customClass = '',
  isShowModalContact = null,
  description = ERROR_MESSAGE.DESC_SEO || '',
  dataSeo = {},
}: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Modal client
  const [isOpenModalClient, setIsOpenModalClient] = useState(false);
  const { token } = useSelector((state) => state?.account);
  const { keywordHashTag, dataConstant } = useSelector((state) => state?.home);
  const { type } = useSelector((state) => state?.home);

  // custom header sticky
  useEffect(() => {
    const elementHeader = document.getElementById('root');
    const sticky = elementHeader?.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window && window.pageYOffset > sticky + 300) {
        elementHeader.classList.add('go-to-top');
      } else {
        elementHeader.classList.remove('go-to-top');
      }
      if (window && window.pageYOffset > 760) {
        elementHeader.classList.add('show-button-contact');
      } else {
        elementHeader.classList.remove('show-button-contact');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
    // eslint-disable-next-line
  }, []);

  // Modal client
  const [openSuccessClient, setOpenSuccessClient] = useState({
    isShow: false,
    content: ERROR_MESSAGE.TEXT_SUCCUSS,
  });

  // get list auto complete input search

  useEffect(() => {
    dispatch(getListHashTag(''));
    dispatch(getDataPageHome());
    dispatch(getDetailLayout('menu'));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getListPartner());
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (isShowModalContact !== null) {
      setIsOpenModalClient(true);
    }
  }, [isShowModalContact]);

  useEffect(() => {
    dispatch(getListAreas());
    dispatch(getListSpaceType());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    switch (type) {
      case 'homes/formRequestSuccess':
        setIsOpenModalClient(false);
        setOpenSuccessClient({
          ...openSuccessClient,
          isShow: true,
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [type]);
  // close modal Tu van khach hang
  const handleCloseModal = () => {
    setIsOpenModalClient(false);
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href={`https://incor.vn${dataSeo?.urlSite}`} />
        <meta
          property="og:title"
          content={`${
            dataSeo?.title ||
            'Incor.vn - Nền tảng kết nối khách hàng với công ty thiết kế xây dựng, nội thất. | WEBSITE CHÍNH THỨC'
          }`}
        />
        <meta
          name="geo.region"
          content={dataSeo?.description || dataConstant?.tagline}
        />
        <meta
          property="og:url"
          content={`https://incor.vn${dataSeo?.urlSite}`}
        />
        <meta property="og:image" content={dataSeo?.urlImage} />
        <meta property="og:image:secure_url" content={dataSeo?.urlImage} />
        <meta
          property="og:image:alt"
          content={`https://incor.vn${dataSeo?.urlSite}`}
        />
        <meta
          name="twitter:title"
          content={`${
            dataSeo?.title ||
            'Incor.vn - Nền tảng kết nối khách hàng với công ty thiết kế xây dựng, nội thất. | WEBSITE CHÍNH THỨC'
          }`}
        />

        <meta name="twitter:image" content={dataSeo?.urlImage} />
        <meta
          itemProp="name"
          name="name"
          content={dataSeo?.description || dataConstant?.tagline}
        />
        <meta
          itemProp="description"
          name="description"
          content={dataSeo?.description || dataConstant?.tagline}
        />
        <meta itemProp="image" name="image" content={dataSeo?.urlImage} />
        <meta
          name="DC.Creator"
          content={dataSeo?.description || dataConstant?.tagline}
        />
        <meta
          name="DC.Type"
          content={dataSeo?.description || dataConstant?.tagline}
        />
        <meta
          name="DC.Indentifier"
          content={dataSeo?.description || dataConstant?.tagline}
        />

        <link rel="image_src" content={dataSeo?.urlImage} />

        <title>{`${dataConstant?.nameWebsite || 'INCOR'} - ${
          dataConstant.tagline || ''
        }`}</title>
        <meta
          name="description"
          content={dataConstant?.tagline || description}
        />
        <meta
          name="keywords"
          cpntent={dataConstant?.tagline || keywordHashTag}
        />
      </Helmet>
      {dataConstant?.favicon && <Favicon url={dataConstant?.favicon || ''} />}
      <div className={`main-layout ${customClass} ${token ? '' : 'no-token'}`}>
        <Header dataConstant={dataConstant} />
        {children}
        <Footer dataConstant={dataConstant} />

        {/* Modal form contact Us */}
        <div className="FormContactUs">
          <FormContactUs
            isOpenModalClient={isOpenModalClient}
            handleCloseModal={handleCloseModal}
          />
        </div>
        {/* Modal form contact Us on Mobile */}
        <div className="FormContactUsMobile">
          <FormContactUsMobile
            isOpenModalClient={isOpenModalClient}
            handleCloseModal={handleCloseModal}
          />
        </div>
        {/* Modal success */}
        <ModalPopup
          isOpen={openSuccessClient.isShow}
          isShowFooter
          textBtnRight="ĐÓNG"
          handleClose={() => {
            setOpenSuccessClient({
              ...openSuccessClient,
              isShow: false,
            });
          }}
        >
          <h2 className="modal-title">CẢM ƠN BẠN !</h2>
          <div className="text-modal-content">{openSuccessClient.content}</div>
        </ModalPopup>
        {!token && (
          <>
            <div className="hotline-phone-ring-wrap">
              <div className="hotline-phone-ring">
                <div className="hotline-phone-ring-circle" />
                <div className="hotline-phone-ring-circle-fill" />
                <div className="hotline-phone-ring-img-circle">
                  <a
                    href={`tel:${dataConstant?.phone}`}
                    className="pps-btn-img"
                  >
                    <img
                      src={IMAGES.imgPhone1}
                      alt="Số điện thoại"
                      width={50}
                    />
                  </a>
                </div>
              </div>
              <div className="hotline-bar">
                <a href={`tel:${dataConstant?.phone}`}>
                  <span className="text-hotline">{dataConstant?.phone}</span>
                </a>
              </div>
            </div>

            <div className="app-fixed-footer">
              <a
                href={`tel:${dataConstant?.phone}`}
                className="button btn btn-primary big btn-fix phone"
                title=""
              >
                <img src={IMAGES.imgPhone} alt="" />
                Điện thoại tư vấn
              </a>
              <Button
                customClass="big btn-fix"
                onClick={() => setIsOpenModalClient(true)}
              >
                <img src={IMAGES.imgContact} alt="" />
                YÊU CẦU TƯ VẤN
              </Button>
            </div>
          </>
        )}
        <div
          className="btn-go-to-top"
          onClick={() => handleGoToTop()}
          tabIndex={0}
          role="menuitem"
          onKeyPress={() => {}}
        >
          <img src={IMAGES.imgBackToTop} alt="" />
        </div>
      </div>
    </>
  );
};

MainLayout.defaultProps = {
  customClass: '',
  isShowModalContact: null,
  description: ERROR_MESSAGE.DESC_SEO || '',
  headTitle: '',
  dataSeo: {},
};
export default memo<Props>(MainLayout);
