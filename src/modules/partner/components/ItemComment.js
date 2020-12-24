// @flow

import React, { memo, useState } from 'react';
import { truncateString } from 'helpers/validate';
import Rating from '../../../commons/components/Rating';

type Props = {
  itemObj: Object,
};

const ItemComment = ({ itemObj }: Props) => {
  const [isShowAllWord, setIsShowAllWord] = useState(false);

  const splitWord = itemObj && itemObj.content && itemObj.content.split(' ');
  const checksLengthWord =
    splitWord && splitWord.slice(0, 25) && splitWord.slice(0, 25).length >= 24;

  return (
    <div className="comment-item d-flex">
      <div className="logo">
        <img src={itemObj?.userAvatar} alt="" />
      </div>
      <div className="comment-content">
        <div className="name">{itemObj?.user}</div>
        <div className="rating">
          <Rating numberStar={itemObj?.rate} />
        </div>
        <div className="date">{itemObj?.createdAt}</div>
        <div className="desc">
          {truncateString(itemObj?.content || '', isShowAllWord ? 0 : 25)}
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
