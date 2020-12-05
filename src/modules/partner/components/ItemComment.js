// @flow

import React, { memo } from 'react';
import Rating from '../../../commons/components/Rating';

type Props = {
  itemObj: Object,
};

const ItemComment = ({ itemObj }: Props) => {
  return (
    <div className="comment-item d-flex">
      <div className="logo">
        <img src={itemObj?.logo} alt="" />
      </div>
      <div className="comment-content">
        <div className="name">{itemObj?.nameClient}</div>
        <div className="rating">
          <Rating numberStar={itemObj?.rating} />
        </div>
        <div className="date">{itemObj?.time}</div>
        <div className="desc">{itemObj?.comment}</div>
      </div>
    </div>
  );
};

export default memo<Props>(ItemComment);
