/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, useRef, memo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import MainLayout from 'commons/components/MainLayout';
import ModalPopup from 'commons/components/Modal';
import FormSearchMulti from 'commons/components/Form/FormSearchMulti';
import Rating from 'commons/components/Rating';
import Loading from 'commons//components/Loading';
import Gallery from 'commons/components/Gallery';
import ERROR_MESSAGE from 'constants/errorMsg';
import PartnerInfo from './PartnerInfo';
import ItemProduct from './ItemProduct';
import ItemComment from './ItemComment';
import ModalQuotation from './ModalQuotation';

import {
  getListProject,
  quotesProjects,
  resetTypeQuotesProject,
  getListPartnerProjects,
} from '../redux';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type Props = {
  history: {
    push: Function,
  },
  match: {
    params: {
      id: string,
    },
  },
};

const PagePartner = ({ history, match }: Props) => {
  const dispatch = useDispatch();
  const { id } = match?.params;
  const {
    dataListProject,
    isProcessingProject,
    type,
    isProcessingQuotes,
    dataPartnerInfo,
    listEvaluate,
    totalRows,
    listProductPartner,
    isProcessing,
    listConstructions,
  } = useSelector((state) => state?.partner);
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

  const [valueSearch, setValueSearch] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // Select Search
  const [optionSearchDefault, setOptionSearchDefault] = useState({
    value: 'product',
    label: 'Sản phẩm',
  });
  const [isOpenModalGallery, setIsOpenModalGallery] = useState(false);
  const [openModalQuotation, setOpenModalQuotation] = useState(false);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [listGallery, setListGallery] = useState([]);
  const [modalShowMess, setModalShowMess] = useState({
    isShow: false,
    content: '',
  });
  // const [listId, setListId] = useState([]);
  const [itemQuote, setItemQuote] = useState(0);

  const handleGetListPartnerProject = useCallback(
    (paramsRequest) => {
      dispatch(getListPartnerProjects(paramsRequest));
    },
    // eslint-disable-next-line
    [getListPartnerProjects]
  );

  useEffect(() => {
    handleGetListPartnerProject({
      partner_id: id,
      page: paginationIndex + 1,
      paged: 3,
    });
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [handleGetListPartnerProject, paginationIndex, id]);

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
  // sau khi báo giá thành công
  useEffect(() => {
    switch (type) {
      case 'partner/quotesProjectsSuccess':
        setOpenModalQuotation(false);
        setModalShowMess({
          ...modalShowMess,
          isShow: true,
          content: ERROR_MESSAGE.TEXT_QUOTES_SUCCUSS,
        });
        break;
      case 'partner/quotesProjectsFailed':
        setOpenModalQuotation(false);
        setModalShowMess({
          ...modalShowMess,
          isShow: true,
          content: ERROR_MESSAGE.TEXT_QUOTES_FAILED,
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [type]);

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
    setOpenModalQuotation(false);
  };

  // click báo giá
  const handleSubmitModalQuotation = () => {
    if (itemQuote) {
      dispatch(quotesProjects({ project_id: itemQuote }));
    } else {
      setErrorMsg(ERROR_MESSAGE.ERROR_QUOTES);
    }
  };

  const handleModalGallery = (gallery) => {
    setListGallery(gallery);
    setIsOpenModalGallery(true);
  };

  const handleCloseModalGallery = (boolean) => {
    setIsOpenModalGallery(boolean);
  };

  const handleCheckBox = (qnaId) => {
    setItemQuote(qnaId);
    setErrorMsg('');
  };

  const renderItemProduct =
    listProductPartner &&
    listProductPartner.length &&
    listProductPartner.length > 0 ? (
      listProductPartner.map((item) => (
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
    listConstructions && listConstructions.length > 0 ? (
      listConstructions.map((item) => (
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
    listEvaluate &&
    listEvaluate.map((item) => <ItemComment key={item.id} itemObj={item} />);

  return (
    <MainLayout>
      <div className="page-partner wrap-slide">
        {isProcessing ? (
          <Loading />
        ) : (
          <>
            <div
              className="bg-title-partner"
              style={{ backgroundImage: `url(${dataPartnerInfo?.image})` }}
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
                <PartnerInfo itemObj={dataPartnerInfo} />
              </div>
              {listProductPartner?.length > 0 && (
                <div className="product-company">
                  <h3 className="title-page">SẢN PHẨM</h3>
                  <div className="product-list-company">
                    <Swiper {...params} navigation>
                      {renderItemProduct}
                    </Swiper>
                  </div>
                </div>
              )}
              {listConstructions?.length > 0 && (
                <div className="product-company">
                  <h3 className="title-page">CÔNG TRÌNH THỰC TẾ</h3>
                  <div className="product-list-company">
                    <Swiper {...params2} navigation>
                      {renderItemProductReality}
                    </Swiper>
                  </div>
                </div>
              )}

              <div className="product-company">
                <h3 className="title-page">ĐÁNH GIÁ KHÁCH HÀNG</h3>
                <div className="product-list-rating">
                  {renderItemComment}

                  {totalRows > 3 && (
                    <div className="wrapper-pagination pb-5">
                      <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        breakLabel={<span className="gap">...</span>}
                        pageCount={Math.ceil(totalRows / 3)}
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
          </>
        )}
      </div>
      {isOpenModalGallery &&
        listGallery &&
        listGallery.length &&
        listGallery.length > 0 && (
          <Gallery
            listGallery={listGallery}
            handleCloseModalGallery={handleCloseModalGallery}
          />
        )}
      <div
        className="quotation"
        onKeyDown={() => {
          setOpenModalQuotation(true);
          setItemQuote(0);
          setErrorMsg('');
        }}
        role="button"
        tabIndex={0}
        onClick={() => {
          setOpenModalQuotation(true);
          setItemQuote(0);
          dispatch(getListProject());
          setErrorMsg('');
        }}
      >
        BÁO GIÁ
      </div>
      <ModalQuotation
        openModalQuotation={openModalQuotation}
        handleCloseModalQuotation={handleCloseModalQuotation}
        handleSubmitModalQuotation={handleSubmitModalQuotation}
        listQuotation={dataListProject}
        itemQuote={itemQuote}
        isProcessingProject={isProcessingProject}
        handleCheckBox={handleCheckBox}
        isProcessingQuotes={isProcessingQuotes}
        errorMsg={errorMsg}
      />
      {/* Modal  hiển thị trạng thái sau khi báo giá */}
      <ModalPopup
        isOpen={modalShowMess.isShow}
        isShowFooter
        textBtnRight="ĐÓNG"
        handleClose={() => {
          dispatch(resetTypeQuotesProject());
          setModalShowMess({
            ...modalShowMess,
            isShow: false,
          });
        }}
      >
        <h2 className="modal-title">THÔNG BÁO</h2>
        <div className="text-modal-content">{modalShowMess.content}</div>
      </ModalPopup>
    </MainLayout>
  );
};

export default memo<Props>(PagePartner);