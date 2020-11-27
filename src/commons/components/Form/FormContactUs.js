// @flow
import React, { memo } from 'react';
import Input from '../Input';
import SelectDropdown from '../Select';
import ModalPopup from '../Modal/';
import { listSelectCity } from '../../../constants/list';

type Props = {
  handleChangeInput: Function,
  valueSearch: string,
  handleSelectChange: Function,
  optionSelect: Object,
};

const FormContactUs = ({
  handleChangeInput,
  valueSearch,
  handleSelectChange,
  optionSelect,
}: Props) => {
  return (
    <ModalPopup isOpen size="lg">
      <div className="form-contact-us">
        <h2>FORM YÊU CẦU TƯ VẤN</h2>
        <div className="form-group row">
          <div className="col-12 col-md-6">
            <Input
              placeholder="Tên khách hàng"
              label="Tên khách hàng"
              name="userNameClient"
              value=""
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              placeholder="Số điện thoại"
              label="Số điện thoại"
              name="phoneClient"
              value=""
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-12 col-md-6">
            <Input
              placeholder="Email"
              label="Email"
              name="EmailClient"
              value=""
            />
          </div>
          <div className="col-12 col-md-6">
            <p className="input__label">Ghi chú thêm</p>
            <SelectDropdown
              name="selectCity"
              listItem={listSelectCity}
              placeholder="Chọn tỉnh/thành phố"
              // onChange={(option) => handleSelectChange(option)}
              option={optionSelect}
            />
          </div>
        </div>
        <div className="form-group">
          <p className="input__label">Ghi chú thêm</p>
          <textarea
            className="form-control"
            rows="4"
            value=""
            placeholder="Ghi chú về số lượng - kích thước từng loại"
            // onChange={(e) =>
            //   handleChangeInput(e.target && e.target.value, 'content')
            // }
          />
        </div>
      </div>
    </ModalPopup>
  );
};

export default memo<Props>(FormContactUs);
