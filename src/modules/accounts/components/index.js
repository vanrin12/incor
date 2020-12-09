/* eslint-disable no-nested-ternary */
// @flow
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../../commons/components/Input';
import Button from '../../../commons/components/Button';
import ERROR_MESSAGE from '../../../constants/errorMsg';
import IMAGES from '../../../themes/images';
import ROUTERS from 'constants/router';

const LoginForm = () => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalInfo, setIsShowModalInfo] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string().required(ERROR_MESSAGE.NICK_NAME_REQUIRED),
      password: Yup.string().required(ERROR_MESSAGE.PASSWORD_REQUIRED),
    }),

    onSubmit: (values) => {
      setIsShowLoading(true);
      console.log(values, 'dddddddddddd');
    },

    validateOnChange: false,
  });
  // handle show modal form login
  const handleShowModal = () => {
    setIsShowModal(!isShowModal);
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
  };
  const nickName = 'NGUYỄN ĐÌNH PHƯƠNG';
  const { userName, password } = formik.values;

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
        <div className="form-group">
          <Input
            placeholder="Tên đăng nhập"
            label="Tên đăng nhập"
            name="userName"
            onKeyPress={(e) => handleKeyDown(e)}
            value={userName}
            onChange={formik.handleChange}
            errorMsg={formik?.errors?.userName}
          />
        </div>
        <div className="form-group">
          <Input
            placeholder="Mật khẩu"
            label="Mật khẩu"
            name="password"
            onKeyPress={(e) => handleKeyDown(e)}
            value={password}
            onChange={formik.handleChange}
            errorMsg={formik?.errors?.password}
          />
        </div>
        <div className="form-group mb-0 text-center btn-summit">
          <Button onClick={handleSubmit} isShowLoading={isShowLoading}>
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

export default LoginForm;
