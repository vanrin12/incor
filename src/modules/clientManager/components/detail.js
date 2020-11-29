/* eslint-disable no-nested-ternary */
// @flow
import React, { memo } from 'react';
import MainLayout from '../../../commons/components/MainLayout';
import IMAGES from '../../../themes/images';
import ROUTERS from 'constants/router';
import { Link } from 'react-router-dom';
import {
  dataDetailClient,
  listRecentClient,
} from '../../../mockData/dataDetail';

type Props = {
  history: {
    push: Function,
  },
};

const ClientDetailManager = ({ history }: Props) => {
  console.log(history);
  const renderListRecentClient =
    listRecentClient &&
    listRecentClient.map((item) => (
      <li key={item.id}>
        <Link to={`${ROUTERS.PAGE_CLIENT}/${item.id}`} title={item.title}>
          {item.title}
        </Link>
      </li>
    ));
  return (
    <MainLayout>
      <div className="page-client detail">
        <div
          className="bg-page-title"
          style={{
            backgroundImage: `url(${IMAGES.bg_title_client})`,
          }}
        >
          <div className="detail-top">
            <div className="detail-title">{dataDetailClient?.title}</div>
            <ul className="breadcrumbs">
              <li>
                <Link to={ROUTERS.MAIN_PAGE} title="Trang chủ">
                  Trang chủ
                </Link>
              </li>
              <li className="line"> / </li>
              <li>
                <Link to={ROUTERS.PAGE_CLIENT} title="Trang chủ">
                  Khách hàng
                </Link>
              </li>
              <li className="line"> / </li>
              <li className="sub-title">{dataDetailClient?.title}</li>
            </ul>
          </div>
        </div>
        <div className="custom-container">
          <div className="content-detail">
            <div className="row">
              <div className="row-left col-12 col-lg-8">
                <p>{dataDetailClient?.desc}</p>
                <p>
                  <img src={dataDetailClient?.image} alt="" />
                  <span>{dataDetailClient?.subImage}</span>
                </p>
                <p>{dataDetailClient?.desc}</p>

                <div className="recent-post">
                  <h3>BÀI VIẾT LIÊN QUAN</h3>
                  <ul>{renderListRecentClient}</ul>
                </div>
              </div>
              <div className="row-right col-12 col-lg-4">
                <div className="list-category">
                  <h3>CHUYÊN MỤC KHÁC</h3>
                  <ul>
                    <li>
                      <Link to={ROUTERS.PAGE_CLIENT}>TƯ VẤN XÂY DỰNG</Link>
                    </li>
                    <li>
                      <Link to={ROUTERS.PAGE_CLIENT}>KHÁCH HÀNG</Link>
                    </li>
                    <li>
                      <Link to={ROUTERS.PAGE_CLIENT}>
                        CHƯƠNG TRÌNH KHUYẾN MÃI
                      </Link>
                    </li>
                    <li>
                      <Link to={ROUTERS.PAGE_RECRUITMENT}>TUYỂN DỤNG</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default memo<Props>(ClientDetailManager);
