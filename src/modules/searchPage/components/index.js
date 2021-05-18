/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, useRef, memo, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getListAreas, getSearchProduct } from 'modules/home/redux';
import MainLayout from 'commons/components/MainLayout';
import FormSearchMulti from 'commons/components/Form/FormSearchMulti';
import FormSearchPage from 'commons/components/Form/FormSearchPage';
import Loading from 'commons/components/Loading';
import ItemSearch from './ItemSearch';
import IMAGES from '../../../themes/images';
import { getListScales } from '../redux';

type Props = {
  history: {
    push: Function,
    location: {
      state: Object,
    },
  },
};

const PageSearch = ({ history }: Props) => {
  const keySearch =
    (history &&
      history.location &&
      history.location.state &&
      history.location.state.keySearch &&
      history.location.state.keySearch.split(',')) ||
    [];

  const optionSelect =
    history &&
    history.location &&
    history.location.state &&
    history.location.state.optionSelect;
  const { dataListHashTags } = useSelector((state) => state?.home);
  const { dataPartner } = useSelector((state) => state?.commonSlice);
  const dispatch = useDispatch();
  const { listDataProductCompany, isProcessingSearch, totalRows } = useSelector(
    (state) => state?.home
  );

  const [valueSearch, setValueSearch] = useState(keySearch || []);
  const [isAddClassSorting, setIsAddClassSorting] = useState(false);
  const [updateListHashTags, setUpdateListHashTags] = useState(
    dataListHashTags || []
  );
  // Select Search
  const [optionSearchDefault, setOptionSearchDefault] = useState(
    optionSelect || {
      value: 'product',
      label: 'Sản phẩm',
    }
  );
  const typingTimeOut = useRef(null);
  const [selectCity, setSelectCity] = useState(null);
  const [selectScale, setSelectScale] = useState(null);
  const [rating, setRating] = useState('');
  const [paginationIndex, setPaginationIndex] = useState(0);

  const handleSelectPagination = (eventKey) => {
    setPaginationIndex(eventKey.selected);
  };

  const handleGetListSearchProduct = useCallback(
    (params) => {
      dispatch(getSearchProduct(params));
    },
    // eslint-disable-next-line
    [getSearchProduct]
  );

  useEffect(() => {
    setUpdateListHashTags(dataListHashTags);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // code sau 0.3s thi goi api
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }
    typingTimeOut.current = setTimeout(() => {
      dispatch(
        getSearchProduct({
          type: optionSearchDefault?.value,
          keywords: (valueSearch && valueSearch.toString()) || '',
          page: paginationIndex + 1,
          paged: 9,
          address: selectCity?.label,
          scale_id: selectScale?.id,
          rate: rating || '',
        })
      );
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 300);
    if (optionSearchDefault.value === 'company') {
      setUpdateListHashTags(dataPartner);
    } else {
      setUpdateListHashTags(dataListHashTags);
    }
    // eslint-disable-next-line
  }, [handleGetListSearchProduct, paginationIndex, optionSearchDefault?.value]);

  // click vào lọc kết quả
  const handleSortingProduct = () => {
    dispatch(
      getSearchProduct({
        type: optionSearchDefault?.value,
        keywords: (valueSearch && valueSearch.toString()) || '',
        page: 1,
        paged: 9,
        address: selectCity?.label,
        scale_id: selectScale?.id,
        rate: rating || '',
      })
    );
    setIsAddClassSorting(false);
  };
  // call app get list scales
  useEffect(() => {
    dispatch(getListScales());
    dispatch(getListAreas());
    // eslint-disable-next-line
  }, []);

  const handleSelectChange = (option, name) => {
    let names = [];
    switch (name) {
      case 'multiSelect':
        names =
          (option &&
            option.length &&
            option.map((item) => {
              return item.label;
            })) ||
          [];
        setValueSearch([names.toString()]);
        if (optionSearchDefault.value === 'company') {
          setUpdateListHashTags(dataPartner);
        } else {
          setUpdateListHashTags(dataListHashTags);
        }
        break;
      case 'selectMain':
        setOptionSearchDefault(option);
        break;

      case 'selectCity':
        setSelectCity(option);
        break;
      case 'selectScale':
        setSelectScale(option);
        break;
      case 'rating':
        if (rating === option) {
          setRating(0);
        } else {
          setRating(option);
        }
        break;
      default:
        break;
    }
  };
  // handelClickShowSorting click show modal filter trên mobile
  const handelClickShowSorting = (boolean) => {
    setIsAddClassSorting(boolean);
  };

  // click vào button tìm kiếm
  const handelSubmitSearch = () => {
    handleSortingProduct();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handelSubmitSearch();
    }
  };

  const renderListSearch =
    listDataProductCompany && listDataProductCompany.length > 0 ? (
      listDataProductCompany.map((item) => (
        <ItemSearch key={item.id} itemObj={item} history={history} />
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ BÀI VIẾT NÀO.</div>
    );

  return (
    <MainLayout
      headTitle={`Tìm kiếm - ${
        (history.location &&
          history.location.state &&
          history.location.state.keySearch &&
          history.location.state.keySearch) ||
        ''
      } `}
    >
      <div className="page-search">
        <div className="sort-mobile">
          <div
            className="icon-sort-mobile"
            onClick={() => handelClickShowSorting(true)}
            onKeyDown={() => handelClickShowSorting(true)}
            role="button"
            tabIndex={0}
          >
            <img src={IMAGES.img_Search} alt="" />
          </div>
          <FormSearchMulti
            handleSelectChange={handleSelectChange}
            optionSelect={optionSearchDefault}
            handelSubmitSearch={handelSubmitSearch}
            valueSearch={valueSearch}
            handleKeyDown={handleKeyDown}
            isMulti
            listHashTags={updateListHashTags}
          />
        </div>

        <div className="content d-flex">
          <div className={`content-left ${isAddClassSorting ? 'active' : ''}`}>
            <div className="filter-sort">
              <FormSearchPage
                handleSelectChange={handleSelectChange}
                selectCity={selectCity}
                selectScale={selectScale}
                rating={rating}
                handleSortingProduct={handleSortingProduct}
              />
            </div>
            <div
              className="overflow"
              onClick={() => handelClickShowSorting(false)}
              onKeyDown={() => handelClickShowSorting(false)}
              role="button"
              tabIndex={0}
            />
          </div>

          <div className="content-right">
            <div className="content-search">
              {isProcessingSearch ? (
                <Loading />
              ) : (
                <div className="row">{renderListSearch}</div>
              )}
              {totalRows > 9 && (
                <>
                  {!isProcessingSearch && (
                    <div className="wrapper-pagination">
                      <ReactPaginate
                        previousLabel="Trang trước"
                        nextLabel="Trang sau"
                        breakLabel={<span className="gap">...</span>}
                        pageCount={Math.ceil(totalRows / 9)}
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default memo<Props>(PageSearch);
