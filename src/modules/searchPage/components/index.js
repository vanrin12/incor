/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, useRef, memo } from 'react';
import ReactPaginate from 'react-paginate';
import MainLayout from '../../../commons/components/MainLayout';
import FormSearchMulti from '../../../commons/components/Form/FormSearchMulti';
import FormSearchPage from '../../../commons/components/Form/FormSearchPage';
import ItemSearch from './ItemSearch';
import { listDataSearchPage } from '../../../mockData/listData';

type Props = {
  history: {
    push: Function,
  },
};

const PageSearch = ({ history }: Props) => {
  const totalRows = 50;
  const [valueSearch, setValueSearch] = useState('');

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
        <FormSearchMulti
          handleChangeInput={handleChangeInput}
          handleSelectChange={handleSelectChange}
          valueSearch={valueSearch}
          optionSelect={optionSearchDefault}
          handelSubmitSearch={handelSubmitSearch}
        />

        <div className="content d-flex">
          <div className="content-left">
            <div className="filter-sort">
              <FormSearchPage
                handleSelectChange={handleSelectChange}
                selectCity={selectCity}
                selectScale={selectScale}
                rating={rating}
              />
            </div>
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
