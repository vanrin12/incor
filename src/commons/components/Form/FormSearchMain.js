// @flow
import React, { memo } from 'react';
// import { Link } from 'react-router-dom';
import Input from '../Input';
import SelectDropdown from '../Select';
import Loading from '../Loading';
import { listSelectSearch } from '../../../constants/list';
import ROUTERS from '../../../constants/router';

type Props = {
  handleChangeInput: Function,
  valueSearch: string,
  handleSelectChange: Function,
  optionSelect: Object,
  listAutocompleteSearch: Array<{
    id: number,
    name: string,
  }>,
  history: {
    push: Function,
  },
  isLoading: boolean,
};

const FormSearchMain = ({
  handleChangeInput,
  valueSearch,
  handleSelectChange,
  optionSelect,
  history,
  listAutocompleteSearch,
  isLoading,
}: Props) => {
  const renderListAutocompleteSearch =
    listAutocompleteSearch && listAutocompleteSearch.length > 0 ? (
      listAutocompleteSearch.map((item) => (
        <li
          key={item.id}
          onClick={() => history.push(`${ROUTERS.PAGE_SEARCH}/${item.name}`)}
          onKeyDown={() => history.push(`${ROUTERS.PAGE_SEARCH}/${item.name}`)}
          role="presentation"
        >
          {item.name}
        </li>
      ))
    ) : (
      <div className="no-data">KHÔNG CÓ KẾT QUẢ TÌM KIẾM.</div>
    );
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
      <div className="list-autocomplete-search">
        {valueSearch && (
          <ul>
            {isLoading ? <Loading /> : <>{renderListAutocompleteSearch}</>}
          </ul>
        )}
      </div>
    </div>
  );
};

export default memo<Props>(FormSearchMain);
