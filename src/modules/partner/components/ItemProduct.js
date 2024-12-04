// @flow

import React, { memo } from 'react';
import IMAGES from 'themes/images';

type Props = {
  itemObj: Object,
  handleModalGallery: Function,
  type: any,
};
const ItemProduct = ({ itemObj, handleModalGallery, type }: Props) => {
  return (
    <div
      className="company-item"
      onClick={() => handleModalGallery(itemObj?.uploads)}
      onKeyDown={() => handleModalGallery(itemObj?.uploads)}
      role="button"
      tabIndex={0}
    >
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${
            type === 'product'
              ? itemObj?.image || IMAGES.imgNotFound
              : itemObj?.uploads[0]?.image || IMAGES.imgNotFound
          })`,
        }}
      />
      <div className="title">
        <h3>{type === 'product' ? itemObj?.hashtag : itemObj?.name}</h3>
      </div>
    </div>
  );
};

export default memo<Props>(ItemProduct);
