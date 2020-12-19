// @flow
import React, { memo, useState } from 'react';
import Input from '../Input';
import SelectDropdown from '../Select';
import Loading from '../Loading/LoadingSmall';
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
    label: string,
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
  const [isShowAutoCompte, setIsShowAutoCompte] = useState(false);

  const handleOnFocusInput = () => {
    setIsShowAutoCompte(true);
    handleChangeInput(valueSearch);
  };

  const handleOnBlurInput = () => {
    setTimeout(() => {
      setIsShowAutoCompte(false);
      clearTimeout();
    }, 400);
  };

  const renderListAutocompleteSearch =
    listAutocompleteSearch && listAutocompleteSearch.length > 0 ? (
      listAutocompleteSearch.map((item) => (
        <li
          key={item.id}
          onClick={() =>
            history.push({
              pathname: `${ROUTERS.PAGE_SEARCH}/${item.label}`,
              state: { keySearch: valueSearch },
            })
          }
          onKeyDown={() =>
            history.push({
              pathname: `${ROUTERS.PAGE_SEARCH}/${item.label}`,
              state: { keySearch: valueSearch },
            })
          }
          role="presentation"
        >
          {item.label}
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
          onFocus={() => handleOnFocusInput()}
          onBlur={() => handleOnBlurInput()}
        />
      </div>
      <div className="list-autocomplete-search">
        {isShowAutoCompte && (
          <ul>
            {isLoading ? <Loading /> : <>{renderListAutocompleteSearch}</>}
          </ul>
        )}
      </div>
    </div>
  );
};

export default memo<Props>(FormSearchMain);
