// @flow
import React, { memo } from 'react';
import Select from 'react-select';
import SelectDropdown from '../Select';
import Button from '../Button';
import { listSelectSearch } from '../../../constants/list';

type Props = {
  handleSelectChange: Function,
  optionSelect: Object,
  handelSubmitSearch: Function,
  valueSearch: any,
  isMulti?: boolean,
  handleKeyDown: Function,
  listHashTags: any,
};

const FormSearch = ({
  handleSelectChange,
  optionSelect,
  handelSubmitSearch,
  valueSearch,
  isMulti = false,
  handleKeyDown,
  listHashTags,
}: Props) => {
  const defaultOption =
    valueSearch &&
    valueSearch.length > 0 &&
    valueSearch.map((item, index) => {
      return {
        id: index + 1,
        value: item,
        label: item,
      };
    });

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
          isMulti={isMulti}
          defaultValue={
            valueSearch && valueSearch.length > 0 ? defaultOption : null
          }
          name="colors"
          placeholder="Nhập nội dung cần tìm"
          options={listHashTags || []}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(option) => handleSelectChange(option, 'multiSelect')}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <div>
          <Button onClick={() => handelSubmitSearch()}>TÌM KIẾM</Button>
        </div>
      </div>
    </div>
  );
};

FormSearch.defaultProps = {
  isMulti: false,
};

export default memo<Props>(FormSearch);
