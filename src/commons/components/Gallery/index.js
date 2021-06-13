// @flow

import React, { memo } from 'react';
import ImageGallery from 'react-image-gallery';

type Props = {
  listGallery: Array<{}>,
  handleCloseModalGallery: Function,
};

const Gallery = ({ listGallery, handleCloseModalGallery }: Props) => {
  return (
    <>
      <div
        className="wrap-gallery"
        onClick={() => handleCloseModalGallery(false)}
        onKeyDown={() => handleCloseModalGallery(false)}
        role="button"
        tabIndex={0}
      />
      <ImageGallery
        items={
          listGallery &&
          listGallery.map((item, index) => {
            return {
              id: index + 1,
              original: item.image,
              thumbnail: item.image,
            };
          })
        }
        width={250}
        height={150}
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad
      />
    </>
  );
};

export default memo<Props>(Gallery);
