// @flow

import React, { memo } from 'react';

type Props = {
  itemObj: Object,
  handleModalGallery: Function,
};

const ItemProduct = ({ itemObj, handleModalGallery }: Props) => {
  return (
    <div
      className="company-item"
      onClick={() => handleModalGallery(itemObj?.gallery)}
      onKeyDown={() => handleModalGallery(itemObj?.gallery)}
      role="button"
      tabIndex={0}
    >
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
