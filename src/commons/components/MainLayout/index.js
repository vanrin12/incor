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
        <link
          rel="canonical"
          href={`https://incor.vn${dataSeo?.urlSite || ''}`}
        />
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
          content={`https://incor.vn${dataSeo?.urlSite || ''}`}
        />
        <meta
          property="og:image"
          content={dataSeo?.urlImage || IMAGES.logo_blue2}
        />
        <meta
          property="og:image:secure_url"
          content={dataSeo?.urlImage || IMAGES.logo_blue2}
        />
        <meta
          property="og:image:alt"
          content={`https://incor.vn${dataSeo?.urlSite || ''}`}
        />
        <meta
          name="twitter:title"
          content={`${
            dataSeo?.title ||
            'Incor.vn - Nền tảng kết nối khách hàng với công ty thiết kế xây dựng, nội thất. | WEBSITE CHÍNH THỨC'
          }`}
        />

        <meta
          name="twitter:image"
          content={dataSeo?.urlImage || IMAGES.logo_blue2}
        />
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
        <meta
          itemProp="image"
          name="image"
          content={dataSeo?.urlImage || IMAGES.logo_blue2}
        />
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

        <link
          rel="image_src"
          content={dataSeo?.urlImage || IMAGES.logo_blue2}
        />

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

            <div className="messages-fb">
              <a
                href="https://www.facebook.com/messages/t/100211065222157"
                title="Massager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="80px"
                  height="80px"
                  viewBox="0 0 60 60"
                  cursor="pointer"
                >
                  <svg x="0" y="0" width="80px" height="80px">
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g>
                        <circle fill="red" cx="30" cy="30" r="30"></circle>
                        <svg x="10" y="10">
                          <g
                            transform="translate(0.000000, -10.000000)"
                            fill="#FFFFFF"
                          >
                            <g
                              id="logo"
                              transform="translate(0.000000, 10.000000)"
                            >
                              <path d="M20,0 C31.2666,0 40,8.2528 40,19.4 C40,30.5472 31.2666,38.8 20,38.8 C17.9763,38.8 16.0348,38.5327 14.2106,38.0311 C13.856,37.9335 13.4789,37.9612 13.1424,38.1098 L9.1727,39.8621 C8.1343,40.3205 6.9621,39.5819 6.9273,38.4474 L6.8184,34.8894 C6.805,34.4513 6.6078,34.0414 6.2811,33.7492 C2.3896,30.2691 0,25.2307 0,19.4 C0,8.2528 8.7334,0 20,0 Z M7.99009,25.07344 C7.42629,25.96794 8.52579,26.97594 9.36809,26.33674 L15.67879,21.54734 C16.10569,21.22334 16.69559,21.22164 17.12429,21.54314 L21.79709,25.04774 C23.19919,26.09944 25.20039,25.73014 26.13499,24.24744 L32.00999,14.92654 C32.57369,14.03204 31.47419,13.02404 30.63189,13.66324 L24.32119,18.45264 C23.89429,18.77664 23.30439,18.77834 22.87569,18.45674 L18.20299,14.95224 C16.80079,13.90064 14.79959,14.26984 13.86509,15.75264 L7.99009,25.07344 Z"></path>
                            </g>
                          </g>
                        </svg>
                      </g>
                    </g>
                  </svg>
                </svg>
              </a>
            </div>

            <div className="app-fixed-footer">
              <a
                href="https://www.facebook.com/messages/t/100211065222157"
                className="button btn btn-primary big btn-fix messages"
                title="Massager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 60 60"
                  cursor="pointer"
                >
                  <svg x="0" y="0" width="60px" height="60px">
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g>
                        <circle fill="#1c3e71" cx="30" cy="30" r="30"></circle>
                        <svg x="10" y="10">
                          <g
                            transform="translate(0.000000, -10.000000)"
                            fill="#FFFFFF"
                          >
                            <g
                              id="logo"
                              transform="translate(0.000000, 10.000000)"
                            >
                              <path d="M20,0 C31.2666,0 40,8.2528 40,19.4 C40,30.5472 31.2666,38.8 20,38.8 C17.9763,38.8 16.0348,38.5327 14.2106,38.0311 C13.856,37.9335 13.4789,37.9612 13.1424,38.1098 L9.1727,39.8621 C8.1343,40.3205 6.9621,39.5819 6.9273,38.4474 L6.8184,34.8894 C6.805,34.4513 6.6078,34.0414 6.2811,33.7492 C2.3896,30.2691 0,25.2307 0,19.4 C0,8.2528 8.7334,0 20,0 Z M7.99009,25.07344 C7.42629,25.96794 8.52579,26.97594 9.36809,26.33674 L15.67879,21.54734 C16.10569,21.22334 16.69559,21.22164 17.12429,21.54314 L21.79709,25.04774 C23.19919,26.09944 25.20039,25.73014 26.13499,24.24744 L32.00999,14.92654 C32.57369,14.03204 31.47419,13.02404 30.63189,13.66324 L24.32119,18.45264 C23.89429,18.77664 23.30439,18.77834 22.87569,18.45674 L18.20299,14.95224 C16.80079,13.90064 14.79959,14.26984 13.86509,15.75264 L7.99009,25.07344 Z"></path>
                            </g>
                          </g>
                        </svg>
                      </g>
                    </g>
                  </svg>
                </svg>
                MESSENGER
              </a>
              <a
                href={`tel:${dataConstant?.phone}`}
                className="button btn btn-primary big btn-fix phone"
                title=""
              >
                <img src={IMAGES.imgPhone1} alt="" />
                Gọi điện
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
