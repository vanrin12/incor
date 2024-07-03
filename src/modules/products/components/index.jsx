import React from 'react';
import MainLayout from 'commons/components/MainLayout';
import Loading from '../../../commons/components/Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {
  listSlideHome,
  listClientHome,
  listSlideConsultancy,
  listSlideMain,
  listAutocompleteSearch,
} from '../../../mockData/dataSlide';
import ItemSlideMain from '../../home/components/itemSlideMain';

const ProductList = () => {
  const paramsOptionSlideMain = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

  };

  const renderListSlideMain =
    listSlideMain.length > 0 &&
    listSlideMain.map((item) => (
      <SwiperSlide key={item.id}>
        <ItemSlideMain itemObj={item} />
      </SwiperSlide>
    ));

  return (
    <MainLayout
      headTitle="Sản Phẩm"
    >
      <div className="main-wrap">
        {false ? (
          <Loading />
        ) : (
          <>
            <div className="session-slide">
              <div className="search-main">
                <Swiper pagination={true} modules={[Pagination]} {...paramsOptionSlideMain} >
                  {renderListSlideMain}
                </Swiper>
              </div>
            </div>
            <div className='line-space'>
              <p>TẠP CHÍ KHÓA KANET</p>
            </div>
          </>
        )}
      </div>
    </MainLayout>

  );
}

export default ProductList;