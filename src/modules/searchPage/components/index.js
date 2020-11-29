/* eslint-disable no-nested-ternary */
// @flow
import React, { useState, useRef } from 'react';
import MainLayout from '../../../commons/components/MainLayout';
import FormSearch from '../../../commons/components/Form/FormSearch';

const PageSearch = () => {
  const [valueSearch, setValueSearch] = useState('');
  // Select Search
  const [optionSearchDefault, setOptionSearchDefault] = useState({
    value: 'product',
    label: 'Sản phẩm',
  });

  const handleSelectChange = (option) => {
    setOptionSearchDefault(option);
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

  return (
    <MainLayout>
      <div className="page-search">
        <FormSearch
          handleChangeInput={handleChangeInput}
          handleSelectChange={handleSelectChange}
          valueSearch={valueSearch}
          optionSelect={optionSearchDefault}
          handelSubmitSearch={handelSubmitSearch}
        />
        <div className="content" />
      </div>
    </MainLayout>
  );
};

export default PageSearch;
