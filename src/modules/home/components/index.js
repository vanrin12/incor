// @flow

import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ROUTERS from 'constants/router';

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
import Loading from '../../../commons/components/Loading';
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
  const {
    dataListHashTags,
    isProcessingSearch,
    sliderMain,
    aboutUsMain,
    advisoryMain,
    customerExperience,
    promotionMain,
    isProcessing,
    customerExperienceName,
  } = useSelector((state) => state?.home);
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '1024': {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      '320': {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  const params2 = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 35,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
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
    // loop: true,
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
        removeVietnameseTones(item.value).toLowerCase().indexOf(inputSearch) >
        -1
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
    sliderMain &&
    sliderMain.uploads &&
    sliderMain.uploads.length > 0 &&
    sliderMain.uploads.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideMain itemObj={item} />
      </SwiperSlide>
    ));

  // render list slide
  const renderListPromotionMain =
    promotionMain &&
    promotionMain.posts &&
    promotionMain.posts.length > 0 &&
    promotionMain.posts.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideSale
          itemObj={item}
          history={history}
          slug={promotionMain?.slug}
        />
      </SwiperSlide>
    ));
  // Render list client
  const renderListClientMain =
    customerExperience &&
    customerExperience.length > 0 &&
    customerExperience.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemClient itemObj={item} key={item.id} />
      </SwiperSlide>
    ));

  // render list slide Consultancy
  const renderListSlideConsultancy =
    advisoryMain &&
    advisoryMain.posts &&
    advisoryMain.posts.length > 0 &&
    advisoryMain.posts.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemConsultancy
          itemObj={item}
          history={history}
          slug={advisoryMain?.slug}
        />
      </SwiperSlide>
    ));

  return (
    <MainLayout
      handleIsOpenModalClient={handleIsOpenModalClient}
      isShowModalContact={isShowModalContact}
      customClass="home-main"
      headTitle="Trang chủ"
    >
      <div className="main-wrap">
        {isProcessing ? (
          <Loading />
        ) : (
          <>
            <div className="session-slide">
              <div className="slider-home">
                <Swiper {...paramsOptionSlideMain}>
                  {renderListSlideMain}
                </Swiper>
              </div>
              {/* Session panner */}
              <div className="slide-info">
                <div className="title-slide">{sliderMain?.title}</div>
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
                <Button
                  customClass="big"
                  onClick={() => handleIsOpenModalClient()}
                >
                  YÊU CẦU TƯ VẤN
                </Button>
              </div>
            </div>

            <div className="session-promotions">
              <div className="container-fluid">
                <div className="heading-title text-uppercase text-center">
                  {promotionMain?.name}
                </div>
                <div className="slide-promotions mobile">
                  <Swiper
                    {...params}
                    // navigation
                    loopAdditionalSlides={1}
                    centeredSlidesBounds
                  >
                    {renderListPromotionMain}
                  </Swiper>
                  {/* <!-- Add Arrows --> */}
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                </div>
              </div>
            </div>

            <div className="session-client">
              <div className="container-fluid">
                <div className="heading-title text-uppercase text-center">
                  {customerExperienceName}
                </div>
                <div className="client">
                  <div className="row">
                    <Swiper
                      {...paramsOptionSlide}
                      loopAdditionalSlides={2}
                      centeredSlidesBounds
                    >
                      {renderListClientMain}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            <div className="session-promotions consultancy">
              <div className="container-fluid">
                <div className="heading-title text-uppercase text-center">
                  {advisoryMain?.name}
                </div>
                <div className="slide-promotions">
                  <Swiper
                    {...params2}
                    // navigation
                    loopAdditionalSlides={1}
                    centeredSlidesBounds
                  >
                    {renderListSlideConsultancy}
                  </Swiper>
                  {/* <!-- Add Arrows --> */}
                  <div className="swiper-button-next2" />
                  <div className="swiper-button-prev2" />
                  <div className="link-more">
                    <Link
                      to={`${ROUTERS.PAGE_BLOG}/tu-van-xay-dung`}
                      title="Quản lý tiến độ"
                    >
                      Xem tất cả
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="session-video">
              <div
                className={`video-info ${!isShowVideo ? 'd-block' : 'd-none'}`}
              >
                <div className="wrap-gallery-video">
                  <h3>{aboutUsMain?.name}</h3>
                  <div className="desc">{aboutUsMain?.tagline}</div>
                </div>
              </div>
              <ReactPlayer
                url={aboutUsMain?.video}
                width="100%"
                className="video-play"
                height="100%"
                controls={isShowVideo}
                playing={isShowVideo}
              />
              <div
                onClick={() => setIsShowVideo(!isShowVideo)}
                onKeyDown={() => setIsShowVideo(!isShowVideo)}
                role="button"
                tabIndex={0}
                className={`btn-video ${!isShowVideo ? 'd-block' : 'd-none'}`}
              >
                <img src={IMAGES.iconPlay} alt="" className="icon-play" />
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default memo<Props>(HomeMain);
