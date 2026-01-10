/* eslint-disable no-nested-ternary */
// @flow

import React, { memo, useState, useRef, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IMAGES from 'themes/images';
import ROUTERS from 'constants/router';
import LoginForm from '../../../modules/accounts/components';
import Menu from './Menu';
import useClickOutside from '../../../customHooks/useClickOutSide';
import { Toast } from 'react-bootstrap';

type Props = {
  location: Object,
  history: {
    push: Function,
  },
  dataConstant: Object,
  showSuccessToast: Boolean,
  handleCloseToast: Function,
};

const Header = ({ location, history, dataConstant, handleCloseToast, showSuccessToast }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const refMenu = useRef(null);
  const iconRef = useRef(null);
  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);
  const { type } = useSelector((state) => state?.account);
  const { layoutHeader } = useSelector((state) => state?.commonSlice);

  useClickOutside(
    refMenu,
    () => {
      if (isOpen) {
        setIsOpen(false);
      }
    },
    { iconRef }
  );

  /** Show popup sign in success */
  useEffect(() => {
    switch (type) {
      case 'accounts/signInRequestSuccess':
      case 'accounts/logoutSuccess':
        setIsOpenModalMobile(false);
        setIsOpen(false);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [type]);

  const handleGetIsShowModal = (boolean) => {
    setIsOpenModalMobile(boolean);
    setIsOpen(false);
  };

  const handelClickMenu = () => {
    setIsOpenModalMobile(false);
    setIsOpen(false);
  };
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="header-main">
      <header className="header d-flex align-items-center">
        <Toast
          show={showSuccessToast}
          onClose={handleCloseToast}
          style={{
            position: 'absolute',
            top: '60px',
            right: '0',
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Kích Hoạt Bảo Hành Thành Công</strong>
          </Toast.Header>
          <Toast.Body>
            KANET cảm ơn bạn! Bạn đã kích hoạt bảo hành điện tử thành công.
          </Toast.Body>
        </Toast>
        <div className="main_logo">
          <Link
            to={ROUTERS.MAIN_PAGE}
            title="Logo"
            onClick={() => handleGoToTop()}
          >
            <img src={dataConstant?.logo || IMAGES.logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-main d-flex align-items-center w-100 ">
          <Menu location={location} layoutHeader={layoutHeader} />
          <LoginForm history={history} />
        </div>
        <div
          className={`icon-menu btn-menu  ${isOpen ? 'show' : ''}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          tabIndex={0}
          role="menuitem"
          onKeyPress={() => {}}
          ref={iconRef}
        />
      </header>
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        tabIndex={0}
        role="menuitem"
        onKeyPress={() => {}}
        ref={iconRef}
        className={`click-off ${isOpen ? 'open' : ''}`}
      />
      <div
        className={`menu-mobile ${isOpenModalMobile ? 'login-open' : ''} ${
          isOpen ? 'open' : ''
        }`}
      >
        <Link
          to={ROUTERS.MAIN_PAGE}
          title="Logo"
          className="logo-blue"
          onClick={() => handleGoToTop()}
        >
          <img src={IMAGES.logo} alt="Logo" />
        </Link>
        <Menu
          location={location}
          handelClickMenu={handelClickMenu}
          layoutHeader={layoutHeader}
        />
        <LoginForm
          handleGetIsShowModal={handleGetIsShowModal}
          history={history}
        />
      </div>
    </div>
  );
};

export default withRouter(memo<Props>(Header));
