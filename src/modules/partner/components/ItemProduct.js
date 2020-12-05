// @flow

import React, { memo } from 'react';

type Props = {
  itemObj: Object,
};

const ItemProduct = ({ itemObj }: Props) => {
  return (
    <div className="company-item">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${itemObj?.image})`,
        }}
      />
      <div className="title">
        <h3>{itemObj?.title}</h3>
      </div>
    </div>
  );
};

export default memo<Props>(ItemProduct);
