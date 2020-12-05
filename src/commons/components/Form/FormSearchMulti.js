// @flow
import React, { memo } from 'react';
import Select from 'react-select';
import SelectDropdown from '../Select';
import Button from '../Button';
import { listSelectSearch, listSelectCity } from '../../../constants/list';

type Props = {
  handleSelectChange: Function,
  optionSelect: Object,
  handelSubmitSearch: Function,
};

const FormSearch = ({
  handleSelectChange,
  optionSelect,
  handelSubmitSearch,
}: Props) => {
  return (
    <div className="form-search d-flex form2 align-items-center">
      <div className="form-group mb-0">
        <SelectDropdown
          name="selectMain"
          listItem={listSelectSearch}
          onChange={(option) => handleSelectChange(option, 'selectMain')}
          option={optionSelect}
        />
        <Select
          isMulti
          // menuIsOpen
          name="colors"
          placeholder="Nhập nội dung cần tìm"
          options={listSelectCity}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <div>
          <Button onClick={() => handelSubmitSearch()}>TÌM KIẾM</Button>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(FormSearch);
