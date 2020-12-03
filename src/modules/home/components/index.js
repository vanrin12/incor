// @flow

import React, { memo, useState, useRef } from 'react';
import IMAGES from 'themes/images';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../../commons/components/Button';
import MainLayout from '../../../commons/components/MainLayout';
import ERROR_MESSAGE from '../../../constants/errorMsg';
import ModalPopup from '../../../commons/components/Modal';
import ItemSlideSale from './ItemSlideSale';
import ItemSlideMain from './itemSlideMain';
import ItemClient from './ItemClient';
import ItemConsultancy from './ItemConsultancy';
import FormSearchMain from '../../../commons/components/Form/FormSearchMain';
import FormContactUs from '../../../commons/components/Form/FormContactUs';
import {
  listSlideHome,
  listClientHome,
  listSlideConsultancy,
  listSlideMain,
} from '../../../mockData/dataSlide';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type Props = {
  history: {
    push: Function,
  },
};

const HomeMain = ({ history }: Props) => {
  const [valueSearch, setValueSearch] = useState('');

  const paramsOptionSlideMain = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  // Options in Swiper
  const params = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 35,
    breakpoints: {
      '1024': {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '320': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  const paramsOptionSlide = {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 2,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  // Modal client
  const [openSuccessClient, setOpenSuccessClient] = useState({
    isShow: false,
    content: ERROR_MESSAGE.TEXT_SUCCUSS,
  });

  // Modal client
  const [isOpenModalClient, setIsOpenModalClient] = useState(false);

  // Select Search
  const [optionSearchDefault, setOptionSearchDefault] = useState({
    value: 'product',
    label: 'Sản phẩm',
  });

  const handleSelectChange = (option) => {
    setOptionSearchDefault(option);
  };
  // handle search
  const typingTimeOut = useRef(null);
  // onsubmit call api

  const handleChangeInput = (value) => {
    setValueSearch(value);
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }
    typingTimeOut.current = setTimeout(() => {
      // code sau 0.3s thi goi api
    }, 300);
  };
  // close modal Tu van khach hang
  const handleCloseModal = () => {
    setIsOpenModalClient(false);
  };

  // handleSubmitForm Tu van khach hang
  const handleSubmitForm = (object) => {
    console.log(object);
    setIsOpenModalClient(false);
    setOpenSuccessClient({
      ...openSuccessClient,
      isShow: true,
    });
  };
  // render list slide Main top
  const renderListSlideMain =
    listSlideMain.length > 0 &&
    listSlideMain.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideMain itemObj={item} />
      </SwiperSlide>
    ));

  // render list slide
  const renderListSlideSale =
    listSlideHome.length > 0 &&
    listSlideHome.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideSale itemObj={item} history={history} />
      </SwiperSlide>
    ));

  // Render list client
  const renderListClientMain =
    listClientHome.length > 0 &&
    listClientHome.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemClient itemObj={item} key={item.id} />
      </SwiperSlide>
    ));

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
      <div className="session-slide">
        <div className="slider-home">
          <Swiper {...paramsOptionSlideMain}>{renderListSlideMain}</Swiper>
        </div>
        {/* Session panner */}
        <div className="slide-info">
          <div className="title-slide">
            Giải pháp xây dựng cho ngôi nhà của bạn
          </div>
          <div className="search-main">
            <FormSearchMain
              handleChangeInput={handleChangeInput}
              handleSelectChange={handleSelectChange}
              valueSearch={valueSearch}
              optionSelect={optionSearchDefault}
            />
          </div>
          <Button customClass="big" onClick={() => setIsOpenModalClient(true)}>
            YÊU CẦU TƯ VẤN
          </Button>
        </div>
      </div>

      <div className="session-promotions">
        <div className="container-fluid">
          <div className="heading-title text-uppercase text-center">
            CHƯƠNG TRÌNH KHUYẾN MÃI
          </div>
          <div className="slide-promotions">
            <Swiper {...params} navigation>
              {renderListSlideSale}
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
            <div className="row">
              <Swiper {...paramsOptionSlide}>{renderListClientMain}</Swiper>
            </div>
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
        >
          <img src={IMAGES.iconPlay} alt="" className="icon-play" />
        </div>
      </div>
      {/* Modal form contact Us */}
      <FormContactUs
        handleSubmitForm={handleSubmitForm}
        isOpenModalClient={isOpenModalClient}
        handleCloseModal={handleCloseModal}
      />
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
    </MainLayout>
  );
};

export default memo<Props>(HomeMain);
