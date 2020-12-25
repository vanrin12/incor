// @flow

import React, { memo } from 'react';
import IMAGES from 'themes/images';

type Props = {
  itemObj: Object,
  handleModalGallery: Function,
};

const ItemProduct = ({ itemObj, handleModalGallery }: Props) => {
  return (
    <div
      className="company-item"
      onClick={() => handleModalGallery(itemObj?.id)}
      onKeyDown={() => handleModalGallery(itemObj?.id)}
      role="button"
      tabIndex={0}
    >
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${itemObj?.image || IMAGES.imgNotFound})`,
        }}
      />
      <div className="title">
        <h3>{itemObj?.name}</h3>
      </div>
    </div>
  );
};

export default memo<Props>(ItemProduct);
