// @flow
import React, { memo } from 'react';
// import { Link } from 'react-router-dom';
import Input from '../Input';
import SelectDropdown from '../Select';
import { listSelectSearch } from '../../../constants/list';

type Props = {
  handleChangeInput: Function,
  valueSearch: string,
  handleSelectChange: Function,
  optionSelect: Object,
};

const FormSearchMain = ({
  handleChangeInput,
  valueSearch,
  handleSelectChange,
  optionSelect,
}: Props) => {

  return (
    <div className="form-search">
      <div className="form-group mb-0">
        <SelectDropdown
          name="selectMain"
          listItem={listSelectSearch}
          onChange={(option) => handleSelectChange(option)}
          option={optionSelect}
        />
        <Input
          placeholder="Nhập nội dung cần tìm"
          value={valueSearch}
          onChange={(e) => handleChangeInput(e.target.value)}
          customClass="input-search"
        />
      </div>
    </div>
  );
};

export default memo<Props>(FormSearchMain);
