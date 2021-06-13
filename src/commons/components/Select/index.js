// @flow
import React from 'react';
import Select from 'react-select';

type Props = {
  placeholder?: string,
  errorMsg?: string,
  label?: string,
  disabled?: boolean,
  isSearchable?: boolean,
  onBlur?: Function,
  onChange?: Function,
  listOptionString?: Array<{ id: number, name: any }>,
  listItem?: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  innerRef?: any,
  option?: Object,
  noOptionsMessage?: Function,
  customClass?: string,
  request?: boolean,
  noLabel?: boolean,
};
const SelectDropdown = ({
  placeholder = '',
  errorMsg = '',
  label = '',
  disabled = false,
  isSearchable = false,
  onBlur = null,
  onChange = () => {},
  innerRef = null,
  option = {},
  noOptionsMessage = () => {},
  listOptionString = [],
  customClass = '',
  request = false,
  noLabel = false,
  listItem,
}: Props) => {
  return (
    <div className="w-100 position-relative">
      <div
        className={`customer-select ${
          customClass.length > 0 ? customClass : ''
        }`}
      >
        {!!label && (
          <p className="input__label">
            {label}
            {request && <span className="request">*</span>}
          </p>
        )}
        <div className="input__box">
          <Select
            placeholder={placeholder}
            ref={innerRef}
            value={option || null}
            onChange={onChange}
            // menuIsOpen
            noOptionsMessage={noOptionsMessage}
            options={
              noLabel
                ? listOptionString.map((item) => ({
                    id: item.id,
                    value: item.name,
                    label: item.name,
                  }))
                : listItem
            }
            blurInputOnSelect={onBlur}
            isDisabled={disabled}
            isSearchable
          />
        </div>
      </div>
      {errorMsg && <p className="error-msg select">{errorMsg}</p>}
    </div>
  );
};
SelectDropdown.defaultProps = {
  placeholder: '',
  errorMsg: '',
  label: '',
  disabled: false,
  isSearchable: false,
  noLabel: false,
  onBlur: null,
  onChange: () => {},
  innerRef: null,
  listItem: [],
  listOptionString: [],
  option: {},
  noOptionsMessage: () => {},
  customClass: '',
  request: false,
};
export default SelectDropdown;
