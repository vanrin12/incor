// @flow

import React, { memo } from 'react';

type Props = {
  itemObj: Object,
};

const SlideMain = ({ itemObj }: Props) => {
  return (
    <div
      className="bg-image-main"
      style={{
        backgroundImage: `url(${itemObj?.image})`,
      }}
    />
  );
};

export default memo<Props>(SlideMain);
