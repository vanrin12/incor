// @flow

import React, { memo } from 'react';

type Props = {
  itemObj: Object,
};

const ItemClient = ({ itemObj }: Props) => {
  return (
    <>
      <div className="item-client col-6">
        <div className="item-client-content d-flex align-items-center">
          <div>
            <div className="item-client-desc">{itemObj?.desc}</div>
            <div className="item-client-name">{itemObj?.name}</div>
            <div className="item-client-address">{itemObj?.address}</div>
          </div>
        </div>
        <div
          className="item-client-image"
          style={{
            backgroundImage: `url(${itemObj?.image})`,
          }}
        />
      </div>
    </>
  );
};

export default memo<Props>(ItemClient);
