/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, useRef, memo } from 'react';
import ReactPaginate from 'react-paginate';
import MainLayout from '../../../commons/components/MainLayout';
import FormSearchMulti from '../../../commons/components/Form/FormSearchMulti';
import FormSearchPage from '../../../commons/components/Form/FormSearchPage';
import ItemSearch from './ItemSearch';
import { listDataSearchPage } from '../../../mockData/listData';
import IMAGES from '../../../themes/images';

type Props = {
  history: {
    push: Function,
  },
};

const PageSearch = ({ history }: Props) => {
  const totalRows = 50;
  const [valueSearch, setValueSearch] = useState('');
  const [isAddClassSorting, setIsAddClassSorting] = useState(false);

  // Select Search
  const [optionSearchDefault, setOptionSearchDefault] = useState({
    value: 'product',
    label: 'Sản phẩm',
  });

  const [selectCity, setSelectCity] = useState(null);
  const [selectScale, setSelectScale] = useState(null);
  const [rating, setRating] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const handleSelectPagination = (eventKey) => {
    setPaginationIndex(eventKey.selected);
  };

  const handleSelectChange = (option, name) => {
    switch (name) {
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
        setRating(option);
        break;
      default:
        break;
    }
  };

  // handelClickShowSorting

  const handelClickShowSorting = (boolean) => {
    setIsAddClassSorting(boolean);
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

  const renderListSearch =
    listDataSearchPage && listDataSearchPage.length > 0 ? (
      listDataSearchPage.map((item) => (
        <ItemSearch key={item.id} itemObj={item} history={history} />
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ BÀI VIẾT NÀO.</div>
    );

  return (
    <MainLayout>
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
            handleChangeInput={handleChangeInput}
            handleSelectChange={handleSelectChange}
            valueSearch={valueSearch}
            optionSelect={optionSearchDefault}
            handelSubmitSearch={handelSubmitSearch}
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
              <div className="row">{renderListSearch}</div>
              {totalRows > 10 && (
                <div className="wrapper-pagination">
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
    </MainLayout>
  );
};

export default memo<Props>(PageSearch);
