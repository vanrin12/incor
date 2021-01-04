// @flow

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ModalPopup from 'commons/components/Modal';
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
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children: any,
  customClass?: string,
  isShowModalContact?: any,
  description?: string,
  headTitle?: string,
};

const MainLayout = ({
  children,
  customClass = '',
  isShowModalContact = null,
  description = ERROR_MESSAGE.DESC_SEO || '',
  headTitle = '',
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
    // eslint-disable-next-line
  }, []);

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
        <title>{`INCOR - ${headTitle}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" cpntent={keywordHashTag} />
      </Helmet>
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
};
export default memo<Props>(MainLayout);
