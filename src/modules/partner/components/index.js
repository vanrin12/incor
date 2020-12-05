/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, useRef, memo } from 'react';
import ReactPaginate from 'react-paginate';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import MainLayout from '../../../commons/components/MainLayout';
import FormSearchMulti from '../../../commons/components/Form/FormSearchMulti';
import PartnerInfo from './PartnerInfo';
import ItemProduct from './ItemProduct';
import ItemComment from './ItemComment';
import Rating from '../../../commons/components/Rating';
import ModalQuotation from './ModalQuotation';
import Gallery from '../../../commons/components/Gallery';
import {
  listProductCompany,
  listRatingCompanyName,
  listQuotation,
} from '../../../mockData/listData';
import { dataPartnerInfo } from '../../../mockData/dataDetail';
import IMAGES from '../../../themes/images';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type Props = {
  history: {
    push: Function,
  },
};

const PagePartner = ({ history }: Props) => {
  // Options in Swiper
  const params = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      '1024': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '320': {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  // Options in Swiper
  const params2 = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      '1024': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '320': {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  const totalRows = 50;
  const [valueSearch, setValueSearch] = useState('');

  // Select Search
  const [optionSearchDefault, setOptionSearchDefault] = useState({
    value: 'product',
    label: 'Sản phẩm',
  });
  const [isOpenModalGallery, setIsOpenModalGallery] = useState(false);
  const [openModalQuotation, setOpenModalQuotation] = useState(false);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [listGallery, setListGallery] = useState([]);
  const [listId, setListId] = useState([]);
  const handleSelectPagination = (eventKey) => {
    setPaginationIndex(eventKey.selected);
  };

  const handleSelectChange = (option, name) => {
    switch (name) {
      case 'selectMain':
        setOptionSearchDefault(option);
        break;
      default:
        break;
    }
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

  const handelSubmitSearch = () => {
    console.log(valueSearch, 'valueSearch');
  };

  const handleCloseModalQuotation = () => {
    console.log('sssssssssssss');
    setOpenModalQuotation(false);
  };

  const handleSubmitModalQuotation = () => {
    console.log('submit');
    setOpenModalQuotation(false);
  };

  const handleModalGallery = (gallery) => {
    setListGallery(gallery);
    setIsOpenModalGallery(true);
  };

  const handleCloseModalGallery = (boolean) => {
    setIsOpenModalGallery(boolean);
  };

  const handleCheckBox = (qnaId) => {
    let dataSubmit = [];
    if (listId.includes({ ...qnaId }[0])) {
      dataSubmit = listId.filter((items) => items !== { ...qnaId }[0]);
    } else {
      dataSubmit = [...listId, ...qnaId];
    }
    setListId(dataSubmit);
  };

  const renderItemProduct =
    listProductCompany && listProductCompany.length > 0 ? (
      listProductCompany.map((item) => (
        <SwiperSlide key={item.id}>
          <ItemProduct
            key={item.id}
            itemObj={item}
            history={history}
            handleModalGallery={handleModalGallery}
          />
        </SwiperSlide>
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ SẢN PHẨM NÀO.</div>
    );

  const renderItemProductReality =
    listProductCompany && listProductCompany.length > 0 ? (
      listProductCompany.map((item) => (
        <SwiperSlide key={item.id}>
          <ItemProduct
            key={item.id}
            itemObj={item}
            history={history}
            handleModalGallery={handleModalGallery}
          />
        </SwiperSlide>
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ SẢN PHẨM NÀO.</div>
    );
  const renderItemComment =
    listRatingCompanyName &&
    listRatingCompanyName.map((item) => (
      <ItemComment key={item.id} itemObj={item} />
    ));

  return (
    <MainLayout>
      <div className="page-partner wrap-slide">
        <div
          className="bg-title-partner"
          style={{ backgroundImage: `url(${IMAGES?.img_product})` }}
        >
          <FormSearchMulti
            handleChangeInput={handleChangeInput}
            handleSelectChange={handleSelectChange}
            valueSearch={valueSearch}
            optionSelect={optionSearchDefault}
            handelSubmitSearch={handelSubmitSearch}
          />
          <div className="info-partner">
            <div className="logo-partner">
              <img src={dataPartnerInfo?.logoPartner} alt="" />
            </div>
            <h3>{dataPartnerInfo?.partnerName}</h3>
            <div className="rating">
              <Rating numberStar={dataPartnerInfo?.rating} />
            </div>
          </div>
        </div>

        <div className="content-company">
          <div className="company-info">
            <h3 className="title-page">THÔNG TIN CÔNG TY</h3>
            <PartnerInfo itemObj={dataPartnerInfo?.partnerInfo} />
          </div>
          <div className="product-company">
            <h3 className="title-page">SẢN PHẨM</h3>
            <div className="product-list-company">
              <Swiper {...params} navigation>
                {renderItemProduct}
              </Swiper>
            </div>
          </div>

          <div className="product-company">
            <h3 className="title-page">CÔNG TRÌNH THỰC TẾ</h3>
            <div className="product-list-company">
              <Swiper {...params2} navigation>
                {renderItemProductReality}
              </Swiper>
            </div>
          </div>

          <div className="product-company">
            <h3 className="title-page">ĐÁNH GIÁ KHÁCH HÀNG</h3>
            <div className="product-list-rating">
              {renderItemComment}

              {totalRows > 10 && (
                <div className="wrapper-pagination pb-5">
                  <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel={<span className="gap">...</span>}
                    pageCount={Math.ceil(totalRows / 10)}
                    onPageChange={(eventKey) =>
                      handleSelectPagination(eventKey)
                    }
                    forcePage={paginationIndex}
                    containerClassName="pagination"
                    disabledClassName="disabled"
                    activeClassName="active"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    marginPagesDisplayed={1}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpenModalGallery && listGallery.length > 0 && (
        <Gallery
          listGallery={listGallery}
          handleCloseModalGallery={handleCloseModalGallery}
        />
      )}
      <div
        className="quotation"
        onKeyDown={() => {
          setOpenModalQuotation(true);
          setListId([]);
        }}
        role="button"
        tabIndex={0}
        onClick={() => {
          setOpenModalQuotation(true);
          setListId([]);
        }}
      >
        BÁO GIÁ
      </div>
      <ModalQuotation
        openModalQuotation={openModalQuotation}
        handleCloseModalQuotation={handleCloseModalQuotation}
        handleSubmitModalQuotation={handleSubmitModalQuotation}
        listQuotation={listQuotation}
        listId={listId}
        handleCheckBox={handleCheckBox}
      />
    </MainLayout>
  );
};

export default memo<Props>(PagePartner);
