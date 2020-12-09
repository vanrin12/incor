// @flow

import React, { memo, useState } from 'react';
import { truncateString } from 'helpers/validate';
import Rating from '../../../commons/components/Rating';

type Props = {
  itemObj: Object,
};

const ItemComment = ({ itemObj }: Props) => {
  const [isShowAllWord, setIsShowAllWord] = useState(false);

  const splitWord = itemObj && itemObj.comment && itemObj.comment.split(' ');
  const checksLengthWord =
    splitWord && splitWord.slice(0, 15) && splitWord.slice(0, 15).length >= 15;

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
        <div className="desc">
          {truncateString(itemObj?.comment || '', isShowAllWord ? 0 : 25)}
          {checksLengthWord && (
            <p
              className="more-btn"
              onClick={(e) => {
                e.preventDefault();
                setIsShowAllWord(!isShowAllWord);
              }}
              onKeyDown={(e) => {
                e.preventDefault();
                setIsShowAllWord(!isShowAllWord);
              }}
              role="presentation"
            >
              {isShowAllWord ? 'Rút gọn' : 'Xem thêm'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(ItemComment);
