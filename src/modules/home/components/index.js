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
import ItemSlideSale from './ItemSlideSale';
import ItemConsultancy from './ItemConsultancy';
import Loading from '../../../commons/components/Loading';
import useWindowDimensions from '../../../customHooks/useWindowDimensions ';
import { getListBlogOffCategory } from '../../blog/redux';
import { ROUTES, API_URI } from '../../../apis';
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
  const { width } = useWindowDimensions();
  const { sliderMain, isProcessing } = useSelector((state) => state?.home);
  const { listBlogOffCategory } = useSelector((state) => state?.blog);
  const [productsPopular, setProductsPopular] = useState([]);
  const [productsByWoodWindow, setProductsByWoodWindow] = useState([]);
  const [productsByAluminumWindow, setProductsByAluminumWindow] = useState([]);
  const [productsByHotel, setProductsByHotel] = useState([]);

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
  useEffect(() => {
    dispatch(
      getListBlogOffCategory({
        slug_or_id: 'tap-chi-kanet',
        page: 1,
        paged: 6,
      })
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const categoriesToFetch = [20, 21, 25, 19];

    const categoryRequests = categoriesToFetch.map((category) =>
      fetch(
        `${API_URI}${ROUTES.API_PRODUCTS}?product_category_id=${category}`,
        { signal: controller.signal }
      ).then((response) => {
        if (!response.ok) throw new Error('Unable to load products');
        return response.json();
      })
    );

    Promise.all(categoryRequests)
      .then((results) => {
        setProductsPopular(results?.[0]?.data?.product?.data || []);
        setProductsByWoodWindow(results?.[1]?.data?.product?.data || []);
        setProductsByHotel(results?.[2]?.data?.product?.data || []);
        setProductsByAluminumWindow(results?.[3]?.data?.product?.data || []);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setProductsPopular([]);
          setProductsByWoodWindow([]);
          setProductsByHotel([]);
          setProductsByAluminumWindow([]);
        }
      });

    return () => controller.abort();
  }, []);

  const handleIsOpenModalClient = () => {
    setIsShowModalContact(!isShowModalContact);
  };

  const renderProductListByCategory = (products) => {
    return (
      products?.length > 0 &&
      products.map((item) => (
        <SwiperSlide key={item.id}>
          <ItemSlideSale itemObj={item} history={history} />
        </SwiperSlide>
      ))
    );
  };
  const renderListSlideConsultancy =
    listBlogOffCategory.length > 0 &&
    listBlogOffCategory.map((item) => (
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
            <div
              className="banner"
              style={{
                backgroundImage: `url(${
                  width > 1280
                    ? sliderMain?.uploads?.[0]?.image
                    : sliderMain?.uploads?.[1]?.image
                })`,
              }}
            />
            <div className="section-slide session-promotions">
              <div className="container">
                <div className="heading-title text-uppercase text-center title-slide color-white">
                  SẢN PHẨM nổi bật
                </div>
                <div className="slide-promotions">
                  <Swiper
                    {...params}
                    loop={productsPopular.length > 4}
                    navigation
                  >
                    {renderProductListByCategory(productsPopular)}
                  </Swiper>
                </div>
                <div className="more-product">
                  <a href="/san-pham">xem thêm sản phẩm</a>
                </div>
              </div>
            </div>

            <div className="section-slide session-product">
              <div className="container">
                <div className="heading-title text-uppercase text-center title-slide color-red">
                  khóa thông minh cửa NHÔM
                </div>
                <div className="slide-promotions">
                  <Swiper
                    {...params}
                    loop={productsByAluminumWindow.length > 4}
                    navigation
                  >
                    {renderProductListByCategory(productsByAluminumWindow)}
                  </Swiper>
                </div>
                <div className="more-product">
                  <a className="color-red" href="/san-pham">
                    xem thêm sản phẩm
                  </a>
                </div>
              </div>
            </div>

            <div className="section-slide session-product bg-brown">
              <div className="container">
                <div className="heading-title text-uppercase text-center title-slide color-red">
                  khóa thông minh cửa GỖ
                </div>
                <div className="slide-promotions">
                  <Swiper
                    {...params}
                    loop={productsByWoodWindow.length > 4}
                    navigation
                  >
                    {renderProductListByCategory(productsByWoodWindow)}
                  </Swiper>
                </div>
                <div className="more-product">
                  <a className="color-red" href="/san-pham">
                    xem thêm sản phẩm
                  </a>
                </div>
              </div>
            </div>
            <div className="section-slide session-product">
              <div className="container">
                <div className="heading-title text-uppercase text-center title-slide color-red">
                  khóa thông minh BIỆT THỰ - KHÁCH SẠN
                </div>
                <div className="slide-promotions">
                  <Swiper
                    {...params}
                    loop={productsByHotel.length > 4}
                    navigation
                  >
                    {renderProductListByCategory(productsByHotel)}
                  </Swiper>
                </div>
                <div className="more-product">
                  <a className="color-red" href="/san-pham">
                    xem thêm sản phẩm
                  </a>
                </div>
              </div>
            </div>
            <div className="section-commit">
              <div className="container">
                <p className="title-page-all1 font38 d-block text-center title-slide color-white">
                  Sử dụng sản phẩm Kanet
                </p>
                <div className="pt-sm-5 pt-4">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 mt-lg-0 mt-3">
                      <div className="item-KANET">
                        <p className="icon-img mb-lg-4 mb-3 w-100 text-lg-left text-center">
                          <img
                            src="https://korest.vn/wp-content/uploads/2021/12/icon-baohanh.png"
                            className="img-fluid"
                            alt="Bảo hành lâu dài"
                            loading="lazy"
                            decoding="async"
                            width="80"
                            height="80"
                          />
                        </p>
                        <p className="title-pro-kanet1 b_UTMAvo cl_white font18 line_h22 text-lg-left text-center">
                          Bảo hành lâu dài
                        </p>
                        <p className="ct-pro-KANET text-line6 text-justify cl_c8 f_UTMAvo font15 line_h22 my-3 text-lg-left text-center">
                          KANET sử dụng công nghệ bảo hành điện tử duy nhất và
                          độc quyền. Thời gian bảo hành từ 3-5 năm. KANET là
                          thương hiệu hiếm hoi bảo hành khóa thông minh cửa
                          nhôm, cửa gỗ… lên tới 5 năm.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-lg-0 mt-3">
                      <div className="item-KANET">
                        <p className="icon-img mb-lg-4 mb-3 w-100 text-lg-left text-center">
                          <img
                            src="https://korest.vn/wp-content/uploads/2021/12/icon-yentamsudung.png"
                            className="img-fluid"
                            alt="Yên tâm khi sử dụng"
                            loading="lazy"
                            decoding="async"
                            width="80"
                            height="80"
                          />
                        </p>
                        <p className=" title-pro-kanet1 b_UTMAvo cl_white font18 line_h22 text-lg-left text-center">
                          Yên tâm khi sử dụng
                        </p>
                        <p className="ct-pro-KANET text-line6 text-justify cl_c8 f_UTMAvo font15 line_h22 my-3 text-lg-left text-center">
                          Chúng tôi hiểu điều gì là tốt nhất với mỗi sản phẩm,
                          một sản phẩm kém chất lượng làm KANET rất khó chịu,
                          vậy nên chúng tôi làm ra sản phẩm chính chúng tôi cảm
                          thấy yên tâm và thoải mái.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-lg-0 mt-3">
                      <div className="item-KANET">
                        <p className="icon-img mb-lg-4 mb-3 w-100 text-lg-left text-center">
                          <img
                            src="https://korest.vn/wp-content/uploads/2021/12/icon-dadangluachon.png"
                            className="img-fluid"
                            alt="Đa dạng lựa chọn"
                            loading="lazy"
                            decoding="async"
                            width="80"
                            height="80"
                          />
                        </p>
                        <p className=" title-pro-kanet1 b_UTMAvo cl_white font18 line_h22 text-lg-left text-center">
                          Đa dạng lựa chọn
                        </p>
                        <p className="ct-pro-KANET text-line6 text-justify cl_c8 f_UTMAvo font15 line_h22 my-3 text-lg-left text-center">
                          Khóa thông minh KANET là 1 trong số ít thương hiệu có
                          đầy đủ dải sản phẩm: khóa thông minh cửa nhôm, khóa
                          thông minh cửa gỗ, khóa thông minh cửa biệt thự, khóa
                          thông minh cửa khách sạn/căn hộ, và khóa thông minh
                          cửa kính, cổng…{' '}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-lg-0 mt-3 wow fadeInLeft">
                      <div className="item-KANET">
                        <p className="icon-img mb-lg-4 mb-3 w-100 text-lg-left text-center">
                          <img
                            src="https://korest.vn/wp-content/uploads/2021/12/icon-tieuchuanchauau.png"
                            className="img-fluid"
                            alt="Tiêu chuẩn Châu Âu"
                            loading="lazy"
                            decoding="async"
                            width="80"
                            height="80"
                          />
                        </p>
                        <p className=" title-pro-kanet1 b_UTMAvo cl_white font18 line_h22 text-lg-left text-center">
                          Tiêu chuẩn Châu Âu
                        </p>
                        <p className="ct-pro-KANET text-line6 text-justify cl_c8 f_UTMAvo font15 line_h22 my-3 text-lg-left text-center">
                          Tiêu chuẩn CE đối với sản phẩm được bán trong khu vực
                          kinh tế Châu Âu (EEA), tiêu chuẩn ISO 9001, tiêu chuẩn
                          ROHS quy định của liên minh Châu Âu về sử dụng chất
                          độc hại
                        </p>
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

export default memo<Props>(HomeMain);
