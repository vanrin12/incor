// @flow

import React, { memo } from 'react';
import Checkbox from '../../../commons/components/Checkbox';

type Props = {
  itemObj: Object,
  handleCheckBox: Function,
  itemQuote: number,
};

const ItemQuotation = ({ itemObj, handleCheckBox, itemQuote }: Props) => {
  const handleClickChange = (id) => {
    handleCheckBox(id);
  };

  return (
    <li
      className="d-flex justify-content-between align-items-center"
      onClick={() => handleClickChange(itemObj?.id)}
      onKeyDown={() => handleClickChange(itemObj?.id)}
      role="presentation"
    >
      <div className="quotation-item">{itemObj?.name}</div>
      <Checkbox
        label={itemObj?.label}
        id={itemObj?.id}
        checked={itemQuote === itemObj?.id}
        onChange={() => {}}
        name={itemObj?.id}
      />
    </li>
  );
};

export default memo<Props>(ItemQuotation);
