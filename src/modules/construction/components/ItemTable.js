/* eslint-disable no-nested-ternary */
// @flow
import React, { memo } from 'react';
import ProgressBar from '../../../commons/components/progressBar';
import Button from '../../../commons/components/Button';
import Rating from '../../../commons/components/Rating';

type Props = {
  itemObj: Object,
  handleShowModalRating: Function,
};

const ItemTable = ({ itemObj, handleShowModalRating }: Props) => {
  return (
    <div className="item-table d-flex">
      <div className="b-item b-item1">
        <div className="b-item-title">{itemObj?.category}</div>
        <div className="b-item-sub-title">{itemObj?.subCategory}</div>
      </div>
      <div className="b-item b-item2">
        <div className="b-item-title">
          {itemObj?.technicalDesc?.name}
          <div className="b-item-desc">{itemObj?.technicalDesc?.desc}</div>
        </div>
      </div>
      <div className="b-item b-item3">
        <div className="b-item-title">{itemObj?.totalCost}</div>
      </div>
      <div className="b-item b-item4">
        <div className="b-item-title">{itemObj?.date}</div>
      </div>
      <div className="b-item b-item5">
        <ProgressBar number={itemObj?.progress} />
      </div>
      <div className="b-item b-item6">
        <div className="b-item-title">{itemObj?.totalAmountPaid}</div>
      </div>
      <div className="b-item b-item7">
        <div className="b-item-title">{itemObj?.totalMoney}</div>
      </div>
      <div className="b-item b-item8">
        <div className="b-item-title">{itemObj?.remark}</div>
      </div>
      <div className="b-item b-item9">
        <div className="b-item-title">
          {/* Nếu tiến độ nhỏ hơn 75% thì ko đánh giá */}
          {itemObj?.rating ? (
            <Rating numberStar={4} />
          ) : (
            <Button
              isDisabled={itemObj?.progress < 75}
              onClick={() => handleShowModalRating(true, itemObj)}
            >
              ĐÁNH GIÁ
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(ItemTable);
