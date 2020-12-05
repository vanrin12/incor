// @flow
import React, { memo } from 'react';
import Input from '../Input';
import SelectDropdown from '../Select';
import Button from '../Button';
import { listSelectSearch } from '../../../constants/list';

type Props = {
  handleChangeInput: Function,
  valueSearch: string,
  handleSelectChange: Function,
  optionSelect: Object,
  handelSubmitSearch: Function,
};

const FormSearch = ({
  handleChangeInput,
  valueSearch,
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
      <div>
        <Button onClick={() => handelSubmitSearch()}>TÌM KIẾM</Button>
      </div>
    </div>
  );
};

export default memo<Props>(FormSearch);
