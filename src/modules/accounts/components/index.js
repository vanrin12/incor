/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../../commons/components/Input';
import Button from '../../../commons/components/Button';
import ERROR_MESSAGE from '../../../constants/errorMsg';
import IMAGES from '../../../themes/images';
import ROUTERS from 'constants/router';
import { signInRequest, resetSingIn, logout } from 'modules/accounts/redux';
import { API } from 'apis';

type Props = {
  handleGetIsShowModal?: Function,
};

const LoginForm = ({ handleGetIsShowModal = () => {} }: Props) => {
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalInfo, setIsShowModalInfo] = useState(false);
  const [errorMess, setErrorMess] = useState('');
  const { type, userInfo, errorMsg, token, isProcessingLogin } = useSelector(
    (state) => state.account
  );

  useEffect(() => {
    dispatch(resetSingIn());
    setErrorMess('');
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(ERROR_MESSAGE.NICK_NAME_REQUIRED),
      password: Yup.string().required(ERROR_MESSAGE.PASSWORD_REQUIRED),
    }),

    onSubmit: (values) => {
      dispatch(signInRequest(values));
    },

    validateOnChange: false,
  });
  /** Show popup sign in success */
  useEffect(() => {
    switch (type) {
      case 'accounts/signInRequestSuccess':
        API.setHeader('Authorization', `${token}`);
        setIsShowModal(false);
        setErrorMess('');
        break;
      case 'accounts/signInRequestFailed':
        setErrorMess(errorMsg);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [type, errorMsg, userInfo]);
  // handle show modal form login
  const handleShowModal = () => {
    setIsShowModal(!isShowModal);
    handleGetIsShowModal(true);
    setErrorMess('');
    formik.setFieldValue('name', '');
    formik.setFieldValue('password', '');
  };

  // handle show modal  Info user
  const handleShowModalInfo = () => {
    setIsShowModalInfo(!isShowModalInfo);
  };
  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // handle logout
  const handleLogout = () => {
    console.log('Logout');
    dispatch(logout());
  };

  const nickName = userInfo?.name;
  const { name, password } = formik.values;

  return (
    <div className="from-login">
      <div className="user-info">
        {nickName ? (
          <button onClick={handleShowModalInfo} className="btn-outline btn-dk">
            <img src={IMAGES.iconUp} alt="" className="ico-up" /> {nickName}
          </button>
        ) : (
          <button onClick={handleShowModal} className="btn-outline">
            ĐĂNG NHẬP
          </button>
        )}
      </div>
      {/* Show modal form login */}

      <div className={`form-content ${isShowModal ? 'd-block' : 'd-none'}`}>
        <div
          className="icon-close"
          onClick={() => {
            handleGetIsShowModal(false);
            setIsShowModal(false);
          }}
          tabIndex={0}
          role="menuitem"
          onKeyPress={() => {}}
        >
          <img src={IMAGES.icon_close2} alt="" />
        </div>
        <div className="logo-login">
          <img src={IMAGES.logo_blue2} alt="" />
          <h3 className="text-login-mobile">ĐĂNG NHẬP</h3>
        </div>
        <div className="form-group">
          <Input
            placeholder="Tên đăng nhập"
            label="Tên đăng nhập"
            name="name"
            onKeyPress={(e) => handleKeyDown(e)}
            value={name}
            onChange={formik.handleChange}
            errorMsg={formik?.errors?.name}
          />
        </div>
        <div className="form-group">
          <Input
            placeholder="Mật khẩu"
            label="Mật khẩu"
            name="password"
            type="password"
            onKeyPress={(e) => handleKeyDown(e)}
            value={password}
            onChange={formik.handleChange}
            errorMsg={formik?.errors?.password}
          />
        </div>
        {errorMess && (
          <div className="form-group">
            <p className="input__error-msg">{errorMess}</p>
          </div>
        )}
        <div className="form-group mb-0 text-center btn-summit">
          <Button onClick={handleSubmit} isShowLoading={isProcessingLogin}>
            ĐĂNG NHẬP
          </Button>
        </div>
      </div>
      {/* Show modal link info */}
      <div
        className={`modal-info-user ${
          isShowModalInfo && nickName ? 'd-block' : 'd-none'
        }`}
      >
        <ul>
          <li>
            <Link to={ROUTERS.PAGE_CONSTRUCTION} title="Quản lý tiến độ">
              Quản lý tiến độ
            </Link>
          </li>
          <li>
            <Link to="/" title="Phản hồi dịch vụ">
              Phản hồi dịch vụ
            </Link>
          </li>
          <li>
            <button className="btn-outline" onClick={handleLogout}>
              Đăng xuất
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo<Props>(LoginForm);
