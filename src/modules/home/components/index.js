// @flow

import React, { memo } from 'react';
import MainLayout from '../../../commons/components/MainLayout';
import IMAGES from 'themes/images';
import Button from '../../../commons/components/Button';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemSlideMain from './ItemSlide';
import ItemClient from './ItemClient';
import ItemConsultancy from './ItemConsultancy';
import {
  listSlideHome,
  listClientHome,
  listSlideConsultancy,
} from '../../../mockData/dataSlide';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

type Props = {
  history: {
    push: Function,
  },
};

const HomeMain = ({ history }: Props) => {
  const sectionStyle = {
    backgroundImage: `url(${IMAGES.imageSlideUrl})`,
  };

  //Options in Swi
  const params = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 35,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  };

  // render list slide
  const renderListSlideMain =
    listSlideHome.length > 0 &&
    listSlideHome.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideMain itemObj={item} history={history} />
      </SwiperSlide>
    ));

  // Render list client
  const renderListClientMain =
    listClientHome.length > 0 &&
    listClientHome.map((item) => <ItemClient itemObj={item} key={item.id} />);

  // render list slide Consultancy
  const renderListSlideConsultancy =
    listSlideConsultancy.length > 0 &&
    listSlideConsultancy.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemConsultancy itemObj={item} history={history} />
      </SwiperSlide>
    ));

  return (
    <MainLayout>
      <div className="session-slide" style={sectionStyle}>
        {/* Session panner */}
        <div className="slide-info">
          <div className="title-slide">
            Giải pháp xây dựng cho ngôi nhà của bạn
          </div>
          <Button customClass="big">YÊU CẦU TƯ VẤN</Button>
        </div>
      </div>

      <div className="session-promotions">
        <div className="container-fluid">
          <div className="heading-title text-uppercase text-center">
            CHƯƠNG TRÌNH KHUYẾN MÃI
          </div>
          <div className="slide-promotions">
            <Swiper {...params} navigation>
              {renderListSlideMain}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="session-client">
        <div className="container-fluid">
          <div className="heading-title text-uppercase text-center">
            CẢM NHẬN KHÁCH HÀNG
          </div>
          <div className="client">
            <div className="row">{renderListClientMain}</div>
          </div>
        </div>
      </div>

      <div className="session-promotions consultancy">
        <div className="container-fluid">
          <div className="heading-title text-uppercase text-center">
            TƯ VẤN XÂY DỰNG
          </div>
          <div className="slide-promotions">
            <Swiper {...params} navigation>
              {renderListSlideConsultancy}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="session-video">
        <div className="video-info">
          <h3>Về chúng tôi</h3>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
            Nunc varius ullamcorper felis. Nulla nibh ipsum, rutrum.
          </div>
        </div>
        <div
          className="bg-session-video"
          style={{ backgroundImage: `url(${IMAGES.imageSlideUrl})` }}
        />
      </div>
    </MainLayout>
  );
};

export default memo<Props>(HomeMain);
