// @flow
import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStartBold } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import SelectDropdown from '../Select';
import Button from '../Button';

type Props = {
  handleSelectChange: Function,
  selectCity: Object,
  selectScale: Object,
  rating: any,
  handleSortingProduct: Function,
};

const FormSearchPage = ({
  handleSelectChange,
  selectCity,
  selectScale,
  rating,
  handleSortingProduct,
}: Props) => {
  const { dataListScales } = useSelector((state) => state?.search);
  const { dataListAreas } = useSelector((state) => state?.home);
  const defaultAreas = {
    id: '',
    value: '',
    label: 'Chọn',
  };

  return (
    <div className="form-search-page">
      <h3>BỘ LỌC TÌM KIẾM</h3>
      <div className="form-group">
        <p className="input__label">Địa điểm</p>
        <SelectDropdown
          name="selectCity"
          listItem={[defaultAreas, ...dataListAreas] || []}
          placeholder="Chọn tỉnh/thành phố"
          onChange={(option) => handleSelectChange(option, 'selectCity')}
          option={selectCity}
        />
      </div>
      <div className="form-group">
        <p className="input__label">Quy mô</p>
        <SelectDropdown
          name="selectScale"
          listItem={[defaultAreas, ...dataListScales] || []}
          placeholder="Quy mô"
          onChange={(option) => handleSelectChange(option, 'selectScale')}
          option={selectScale}
        />
      </div>
      <div className="group-rating">
        <p className="input__label">Đánh giá</p>
        <div className="d-flex align-items-center group-btn-rating">
          <div
            className={`option5 item ${rating >= 1 ? 'active' : ''}`}
            onClick={() => handleSelectChange(1, 'rating')}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faStartBold} />
          </div>
          <div
            className={`option4 item ${rating >= 2 ? 'active' : ''}`}
            onClick={() => handleSelectChange(2, 'rating')}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faStartBold} />
          </div>
          <div
            className={`option3 item ${rating >= 3 ? 'active' : ''}`}
            onClick={() => handleSelectChange(3, 'rating')}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faStartBold} />
          </div>
          <div
            className={`option2 item ${rating >= 4 ? 'active' : ''}`}
            onClick={() => handleSelectChange(4, 'rating')}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faStartBold} />
          </div>
          <div
            className={`option1 item ${rating >= 5 ? 'active' : ''}`}
            onClick={() => handleSelectChange(5, 'rating')}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faStartBold} />
          </div>
        </div>
        <Button onClick={() => handleSortingProduct()}>LỌC KẾT QUẢ</Button>
      </div>
    </div>
  );
};

export default memo<Props>(FormSearchPage);
