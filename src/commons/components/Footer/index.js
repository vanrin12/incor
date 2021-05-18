// @flow
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import IMAGES from 'themes/images';
import ROUTERS from 'constants/router';

type Props = {
  dataConstant: Object,
};

const Footer = ({ dataConstant }: Props) => {
  return (
    <footer className="footer">
      <div className=" container-fluid">
        <div className="content-footer row">
          <div className="col-left col-4 align-self-center">
            <div className="logo-footer">
              <Link to={ROUTERS.MAIN_PAGE} title="">
                <img
                  src={dataConstant?.logoFooter || IMAGES.logoFooter}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="mobile-social">
              <div className="address-title">Social</div>
              <div className="address-name d-flex align-items-center">
                <a
                  href={dataConstant?.linkFacebook || ''}
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={IMAGES.facebook} alt="" />
                </a>
                <a
                  href={dataConstant?.linkYoutube || ''}
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={IMAGES.youtube} alt="" />
                </a>
              </div>
            </div>
            <div className="logo-copyright">
              <Link to={ROUTERS.MAIN_PAGE} title="">
                <img
                  src={dataConstant?.logoCongThuong || IMAGES.logoCopyright}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-right col-8 align-self-center">
            <div className="info-company">
              <h3>{dataConstant?.companyName}</h3>
              <div className="company-desc">{dataConstant?.descCompany}</div>
              <div className="address">
                <div className="address-title">Địa chỉ văn phòng</div>
                <div className="address-name">{dataConstant?.address}</div>
              </div>
              <div className="address-company">
                <ul className="d-flex align-items-center">
                  <li>
                    <div className="address-title">Điện thoại</div>
                    <div className="address-name">{dataConstant?.phone}</div>
                  </li>
                  <li>
                    <div className="address-title">Email</div>
                    <div className="address-name">{dataConstant?.email}</div>
                  </li>
                  <li className="desktop">
                    <div className="address-title">Social</div>
                    <div className="address-name d-flex align-items-center">
                      <a
                        href={dataConstant?.linkFacebook || ''}
                        title="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={IMAGES.facebook} alt="" />
                      </a>
                      <a
                        href={dataConstant?.linkYoutube || ''}
                        title="Youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={IMAGES.youtube} alt="" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright d-flex align-items-center justify-align-content-between">
        <ul className="list-service">
          <li>
            <Link to="/dieu-khoan-su-dung/138">Điều khoản sử dụng</Link>
          </li>
          <li>
            <Link to="/chinh-sach-bao-mat/129">Chính sách bảo mật</Link>
          </li>
          <li>
            <Link to="/cau-hoi-thuong-gap/130">Câu hỏi thường gặp</Link>
          </li>
        </ul>
        <div className="name-copyright">
          <div className="copyright">{dataConstant?.copyRight}</div>
        </div>
      </div>
    </footer>
  );
};

export default memo<Props>(Footer);
