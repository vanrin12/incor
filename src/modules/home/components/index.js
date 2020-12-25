// @flow

import React, { memo, useState, useEffect } from 'react';

import IMAGES from 'themes/images';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'commons/components/Button';
import MainLayout from 'commons/components/MainLayout';
import FormSearchMain from 'commons/components/Form/FormSearchMain';
import { removeVietnameseTones } from 'helpers/validate';
import ItemSlideSale from './ItemSlideSale';
import ItemSlideMain from './itemSlideMain';
import ItemClient from './ItemClient';
import ItemConsultancy from './ItemConsultancy';

import {
  listSlideHome,
  listClientHome,
  listSlideConsultancy,
  listSlideMain,
} from '../../../mockData/dataSlide';
import { resetGetSearchProduct } from '../redux';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type Props = {
  history: {
    push: Function,
  },
};

const HomeMain = ({ history }: Props) => {
  const [isShowModalContact, setIsShowModalContact] = useState(null);
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState('');
  const [updateListHashTags, setUpdateListHashTags] = useState([]);
  const [isShowVideo, setIsShowVideo] = useState(false);
  const { dataListHashTags, isProcessingSearch } = useSelector(
    (state) => state?.home
  );
  const { token } = useSelector((state) => state?.account);

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
        spaceBetween: 0,
      },
      '320': {
        slidesPerView: 2,
        spaceBetween: 0,
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

  // Select Search
  const [optionSearchDefault, setOptionSearchDefault] = useState({
    value: 'product',
    label: 'Sản phẩm',
  });

  // handle search
  const inputSearch = removeVietnameseTones(valueSearch.trim()).toLowerCase();

  useEffect(() => {
    dispatch(resetGetSearchProduct());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const listFilter = dataListHashTags.filter(
      (item) =>
        removeVietnameseTones(item.value || '')
          .toLowerCase()
          .indexOf(inputSearch) > -1
    );
    setUpdateListHashTags(inputSearch ? listFilter : dataListHashTags);
    // eslint-disable-next-line
  }, [dataListHashTags && dataListHashTags.length, valueSearch]);
  const handleSelectChange = (option) => {
    setOptionSearchDefault(option);
  };

  // onsubmit call api
  const handleChangeInput = (value) => {
    setValueSearch(value);
  };

  const handleIsOpenModalClient = () => {
    setIsShowModalContact(!isShowModalContact);
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
    <MainLayout
      handleIsOpenModalClient={handleIsOpenModalClient}
      isShowModalContact={isShowModalContact}
      customClass="home-main"
      headTitle="Trang chủ"
    >
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
            {token && (
              <FormSearchMain
                handleChangeInput={handleChangeInput}
                handleSelectChange={handleSelectChange}
                valueSearch={valueSearch}
                optionSelect={optionSearchDefault}
                history={history}
                listAutocompleteSearch={updateListHashTags}
                isLoading={isProcessingSearch}
              />
            )}
          </div>
          <Button customClass="big" onClick={() => handleIsOpenModalClient()}>
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
        {isShowVideo ? (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=CTcoCHKnkT8"
            width="100%"
            className="video-play"
            height="100%"
            playing
            onPause={() => setIsShowVideo(false)}
          />
        ) : (
          <div
            className="bg-session-video"
            style={{ backgroundImage: `url(${IMAGES.imageSlideUrl})` }}
          >
            <div
              onClick={() => setIsShowVideo(true)}
              onKeyDown={() => setIsShowVideo(true)}
              role="button"
              tabIndex={0}
            >
              <img src={IMAGES.iconPlay} alt="" className="icon-play" />
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default memo<Props>(HomeMain);
