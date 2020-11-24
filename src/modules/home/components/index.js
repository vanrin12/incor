// @flow

import React, { memo } from 'react';
import MainLayout from '../../../commons/components/MainLayout';
import IMAGES from 'themes/images';
import Button from '../../../commons/components/Button';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemSlideMain from './ItemSlide';
import { listSlideHome } from '../../../mockData/dataSlide';

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

  const renderListSlideMain =
    listSlideHome.length > 0 &&
    listSlideHome.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideMain itemObj={item} history={history} />
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
          <Button customClass="big mt-5">YÊU CẦU TƯ VẤN</Button>
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
              {/* <!-- Add Arrows --> */}
              {/* <div
                class="swiper-button-prev"
                tabindex="0"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-62b7ce1a49b87439"
              ></div>
              <div
                class="swiper-button-next"
                tabindex="0"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-f29247e6b10b17610d"
              ></div> */}
            </Swiper>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default memo<Props>(HomeMain);
