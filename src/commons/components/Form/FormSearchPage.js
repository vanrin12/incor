// @flow
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import SelectDropdown from '../Select';
import Button from '../Button';
import Rating from '../Rating';

type Props = {
  handleSelectChange: Function,
  selectCity: Object,
  selectScale: Object,
  rating: number,
};

const FormSearchPage = ({
  handleSelectChange,
  selectCity,
  selectScale,
  rating,
}: Props) => {
  const { dataListScales } = useSelector((state) => state?.search);
  const { dataListAreas } = useSelector((state) => state?.home);
  return (
    <div className="form-search-page">
      <h3>BỘ LỌC TÌM KIẾM</h3>
      <div className="form-group">
        <p className="input__label">Địa điểm</p>
        <SelectDropdown
          name="selectCity"
          listItem={dataListAreas || []}
          placeholder="Chọn tỉnh/thành phố"
          onChange={(option) => handleSelectChange(option, 'selectCity')}
          option={selectCity}
        />
      </div>
      <div className="form-group">
        <p className="input__label">Quy mô</p>
        <SelectDropdown
          name="selectScale"
          listItem={dataListScales || []}
          placeholder="Quy mô"
          onChange={(option) => handleSelectChange(option, 'selectScale')}
          option={selectScale}
        />
      </div>
      <div className="group-rating">
        <p className="input__label">Đánh giá</p>
        <div
          className={`option5 ${rating === 5 ? 'active' : ''}`}
          onClick={() => handleSelectChange(5, 'rating')}
          onKeyDown={() => handleSelectChange(5, 'rating')}
          role="button"
          tabIndex={0}
        >
          <Rating numberStar={5} />
        </div>
        <div
          className={`option4 ${rating === 4 ? 'active' : ''}`}
          onClick={() => handleSelectChange(4, 'rating')}
          onKeyDown={() => handleSelectChange(4, 'rating')}
          role="button"
          tabIndex={0}
        >
          <Rating numberStar={4} />
        </div>
        <div
          className={`option3 ${rating === 3 ? 'active' : ''}`}
          onClick={() => handleSelectChange(3, 'rating')}
          onKeyDown={() => handleSelectChange(3, 'rating')}
          role="button"
          tabIndex={0}
        >
          <Rating numberStar={3} />
        </div>
        <div
          className={`option2 ${rating === 2 ? 'active' : ''}`}
          onClick={() => handleSelectChange(2, 'rating')}
          onKeyDown={() => handleSelectChange(2, 'rating')}
          role="button"
          tabIndex={0}
        >
          <Rating numberStar={2} />
        </div>
        <div
          className={`option1 ${rating === 1 ? 'active' : ''}`}
          onClick={() => handleSelectChange(1, 'rating')}
          onKeyDown={() => handleSelectChange(1, 'rating')}
          role="button"
          tabIndex={0}
        >
          <Rating numberStar={1} />
        </div>
        <Button onClick={() => {}}>LỌC KẾT QUẢ</Button>
      </div>
    </div>
  );
};

export default memo<Props>(FormSearchPage);
