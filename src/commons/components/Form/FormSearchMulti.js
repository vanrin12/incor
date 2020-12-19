// @flow
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import SelectDropdown from '../Select';
import Button from '../Button';
import { listSelectSearch } from '../../../constants/list';

type Props = {
  handleSelectChange: Function,
  optionSelect: Object,
  handelSubmitSearch: Function,
  valueSearch: any,
};

const FormSearch = ({
  handleSelectChange,
  optionSelect,
  handelSubmitSearch,
  valueSearch,
}: Props) => {
  const defaultOption = {
    id: 0,
    value: valueSearch,
    label: valueSearch,
  };
  const { listDataProductFormSearch } = useSelector((state) => state?.home);

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
          defaultValue={[defaultOption]}
          name="colors"
          placeholder="Nhập nội dung cần tìm"
          options={listDataProductFormSearch || []}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(option) => handleSelectChange(option, 'multiSelect')}
        />
        <div>
          <Button onClick={() => handelSubmitSearch()}>TÌM KIẾM</Button>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(FormSearch);
