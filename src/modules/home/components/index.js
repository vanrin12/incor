// @flow

import React, { memo, useState, useEffect } from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import MainLayout from 'commons/components/MainLayout';
import { removeVietnameseTones } from 'helpers/validate';
import ItemSlideSale from './ItemSlideSale';
import ItemSlideMain from './itemSlideMain';
import ItemConsultancy from './ItemConsultancy';
import Loading from '../../../commons/components/Loading';
import { resetGetSearchProduct } from '../redux';
import useWindowDimensions from '../../../customHooks/useWindowDimensions '
import {
  listSlideHome,
  listSlideConsultancy,
} from '../../../mockData/dataSlide';
import ProductIem from 'commons/components/ProductItem';

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
  const { height, width } = useWindowDimensions();
  const {
    dataListHashTags,
    sliderMain,
    isProcessing,
  } = useSelector((state) => state?.home);
  const { dataPartner } = useSelector((state) => state?.commonSlice);
  // const { token } = useSelector((state) => state?.account);
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
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '1024': {
        slidesPerView: 4,
        spaceBetween: 15,
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
  const params2 = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      '1024': {
        slidesPerView: 4,
        spaceBetween: 15,
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
    const listFilterCompany = dataPartner.filter(
      (item) =>
        removeVietnameseTones(item.value).toLowerCase().indexOf(inputSearch) >
        -1
    );

    if (optionSearchDefault?.value === 'company') {
      setUpdateListHashTags(inputSearch ? listFilterCompany : dataPartner);
    } else {
      setUpdateListHashTags(inputSearch ? listFilter : dataListHashTags);
    }
    // eslint-disable-next-line
  }, [
    optionSearchDefault.value,
    // eslint-disable-next-line
    dataListHashTags && dataListHashTags.length,
    valueSearch,
  ]);

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
    listSlideConsultancy &&
    listSlideConsultancy.posts &&
    listSlideConsultancy.posts.length > 0 &&
    listSlideConsultancy.posts.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideSale
          itemObj={item}
          history={history}
        // slug={listSlideConsultancy?.slug}
        />
      </SwiperSlide>
    ));

  const renderListSlideSale =
    listSlideHome.length > 0 &&
    listSlideHome.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideSale itemObj={item} history={history} />
      </SwiperSlide>
    ));

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
      <div className="main-wrap">
        {isProcessing ? (
          <Loading />
        ) : (
          <>
            <div className="banner" style={{
              backgroundImage: `url(${width > 1280 ? sliderMain?.uploads?.[0]?.image : sliderMain?.uploads?.[1]?.image})`
            }} />
            <div className="section-slide session-promotions">
              <div className="container">
                <div className="heading-title text-uppercase text-center title-slide color-white">
                  SẢN PHẨM nổi bật
                </div>
                <div className="slide-promotions">
                  <Swiper {...params} navigation>
                    {renderListSlideSale}
                  </Swiper>
                </div>
                <div className='more-product'><a href="/products">xem thêm sản phẩm</a></div>
              </div>
            </div>

            <div className="section-slide session-product">
              <div className="container">
                <div className="heading-title text-uppercase text-center title-slide color-red">
                  khóa thông minh cửa NHÔM
                </div>
                <div className="slide-promotions">
                  <Swiper {...params} navigation>
                    {renderListSlideSale}
                  </Swiper>
                </div>
                <div className='more-product'><a className='color-red' href="/products">xem thêm sản phẩm</a></div>
              </div>
            </div>

            <div className="section-slide session-product bg-brown">
              <div className="container">
                <div className="heading-title text-uppercase text-center title-slide color-red">
                  khóa thông minh cửa KÍNH
                </div>
                <div className="slide-promotions">
                  <Swiper {...params} navigation>
                    {renderListSlideSale}
                  </Swiper>
                </div>
                <div className='more-product'><a className='color-red' href="/products">xem thêm sản phẩm</a></div>
              </div>
            </div>
            <div className="section-slide session-product">
              <div className="container">
                <div className="heading-title text-uppercase text-center title-slide color-red">
                  khóa thông minh BIỆT THỰ - KHÁCH SẠN
                </div>
                <div className="slide-promotions">
                  <Swiper {...params} navigation>
                    {renderListSlideSale}
                  </Swiper>
                </div>
                <div className='more-product'><a className='color-red' href="/products">xem thêm sản phẩm</a></div>
              </div>
            </div>
            <div class="section-commit">
              <div class="container">
                <p class="title-page-all1 font38 d-block text-center title-slide color-white">Sử dụng sản phẩm Kanet</p>
                <div class="pt-sm-5 pt-4">
                  <div class="row">
                    <div class="col-lg-3 col-sm-6 mt-lg-0 mt-3">
                      <div class="item-kanet">
                        <p class="icon-img mb-lg-4 mb-3 w-100 text-lg-left text-center">
                          <img src="https://korest.vn/wp-content/uploads/2021/12/icon-baohanh.png" class="img-fluid lazyloaded" alt=" Bảo hành lâu dài" data-ll-status="loaded" />
                        </p>
                        <p class="title-pro-kanet1 b_UTMAvo cl_white font18 line_h22 text-lg-left text-center">Bảo hành lâu dài
                        </p>
                        <p class="ct-pro-kanet text-line6 text-justify cl_c8 f_UTMAvo font15 line_h22 my-3 text-lg-left text-center">KANET sử dụng công nghệ bảo hành điện tử duy nhất và độc quyền. Thời gian bảo hành từ 3 năm - 15 năm. KANET là thương hiệu hiếm hoi bảo hành bộ xả bồn cầu lên tới 8 năm.</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mt-lg-0 mt-3">
                      <div class="item-kanet">
                        <p class="icon-img mb-lg-4 mb-3 w-100 text-lg-left text-center">
                          <img src="https://korest.vn/wp-content/uploads/2021/12/icon-yentamsudung.png" class="img-fluid lazyloaded" alt=" Yên tâm khi sử dụng" data-ll-status="loaded" />
                        </p>
                        <p class=" title-pro-kanet1 b_UTMAvo cl_white font18 line_h22 text-lg-left text-center">Yên tâm khi sử dụng
                        </p>
                        <p class="ct-pro-kanet text-line6 text-justify cl_c8 f_UTMAvo font15 line_h22 my-3 text-lg-left text-center">Chúng tôi hiểu điều gì là tốt nhất đối với mỗi sản phẩm, một sản phẩm kém chất lượng làm KANET rất khó chịu, vậy nên chúng tôi làm ra sản phẩm chính chúng tôi cảm thấy yên tâm và thoải mái...</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mt-lg-0 mt-3">
                      <div class="item-kanet">
                        <p class="icon-img mb-lg-4 mb-3 w-100 text-lg-left text-center">
                          <img src="https://korest.vn/wp-content/uploads/2021/12/icon-dadangluachon.png" class="img-fluid lazyloaded" alt=" Đa dạng lựa chọn" data-ll-status="loaded" />
                        </p>
                        <p class=" title-pro-kanet1 b_UTMAvo cl_white font18 line_h22 text-lg-left text-center">Đa dạng lựa chọn
                        </p>
                        <p class="ct-pro-kanet text-line6 text-justify cl_c8 f_UTMAvo font15 line_h22 my-3 text-lg-left text-center">Bạn có biết thiết bị vệ sinh KANET là một trong những thương hiệu thiết bị vệ sinh có số lượng sản phẩm nhiều hàng đầu trên thị trường?</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mt-lg-0 mt-3 wow fadeInLeft">
                      <div class="item-kanet">
                        <p class="icon-img mb-lg-4 mb-3 w-100 text-lg-left text-center">
                          <img src="https://korest.vn/wp-content/uploads/2021/12/icon-tieuchuanchauau.png" class="img-fluid lazyloaded" alt=" Tiêu chuẩn Châu Âu" data-ll-status="loaded" />
                        </p>
                        <p class=" title-pro-kanet1 b_UTMAvo cl_white font18 line_h22 text-lg-left text-center">Tiêu chuẩn Châu Âu
                        </p>
                        <p class="ct-pro-kanet text-line6 text-justify cl_c8 f_UTMAvo font15 line_h22 my-3 text-lg-left text-center">Tiêu chuẩn UPC xuất USA, Tiêu chuẩn CE đối với sản phẩm được bán trong khu vực kinh tế Châu Âu (EEA), Tiêu chuẩn ISO 9001, Tiêu chuẩn RoHS quy định của liên minh Châu Âu về sử dụng chất độc hại,......</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="session-promotions consultancy">
              <div className="container-fluid">
                <div className="heading-title text-uppercase text-center title-slide color-red">
                  TẠP CHÍ KHÓA KANET
                </div>
                <div className="slide-promotions">
                  <Swiper {...params2} navigation>
                    {renderListSlideConsultancy}
                  </Swiper>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default memo < Props > (HomeMain);
