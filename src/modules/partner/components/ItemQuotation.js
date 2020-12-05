// @flow

import React, { memo, useState } from 'react';
import Checkbox from '../../../commons/components/Checkbox';

type Props = {
  itemObj: Object,
  handleCheckBox: Function,
  listId: Array<number>,
};

const ItemQuotation = ({ itemObj, handleCheckBox, listId }: Props) => {
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    handleCheckBox([itemObj?.id]);
  };
  const handleClickChange = (id) => {
    handleCheckBox([id]);
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
        checked={!!listId.includes(itemObj?.id)}
        onChange={(e) => handleChange(e)}
        name={itemObj?.id}
      />
    </li>
  );
};

export default memo<Props>(ItemQuotation);
