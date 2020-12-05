// @flow

import React, { memo } from 'react';

type Props = {
  name?: string,
  checked: boolean,
  onChange?: Function,
  label?: string,
  onKeyPress?: Function,
  customClass?: string,
};

export const Checkbox = ({
  label = '',
  name,
  checked,
  onChange,
  onKeyPress = null,
  customClass,
}: Props) => {
  return (
    <div className={`checkbox ${checked ? 'checkbox--checked' : ''}`}>
      <label className="checkbox__label" htmlFor={name}>
        <span className={customClass}>{label}</span>
        <input
          className="checkbox__input"
          id={name}
          name={name}
          type="checkbox"
          onChange={onChange}
          onKeyPress={onKeyPress}
          checked={checked}
        />
      </label>
    </div>
  );
};
Checkbox.defaultProps = {
  onKeyPress: null,
  label: '',
  customClass: '',
  onChange: null,
  name: '',
};

export default memo<Props>(Checkbox);
