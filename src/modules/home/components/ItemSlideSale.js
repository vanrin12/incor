// @flow

import React, { memo } from 'react';
import Button from '../../../commons/components/Button';
import { Link } from 'react-router-dom';
import ROUTERS from 'constants/router';

type Props = {
  itemObj: Object,
  history: {
    push: Function,
  },
  slug: string,
};
const SlideMainSale = ({ history, itemObj, slug }: Props) => {
  const formatCurrency = (value) => {
    if (!value) return ""; // Handle empty input
  
    // Convert to a string and remove all non-numeric characters except for a possible decimal point
    const numericValue = value.toString().replace(/\D/g, "");
  
    // Format as Vietnamese currency
    return new Intl.NumberFormat("vi-VN").format(Number(numericValue));
  };
  return (
    <>
      <div className="slide-content">
        <div
          className="bg-image"
          onClick={() =>
            history.push(`${ROUTERS.PRODUCT_LIST}/${itemObj?.id}`)
          }
          onKeyDown={() =>
            history.push(`${ROUTERS.PRODUCT_LIST}/${itemObj?.id}`)
          }
          role="button"
          tabIndex={0}
          style={{ height: 'auto' }}
        >
          <img
            src={itemObj?.images?.[0]?.image || ''}
            alt={itemObj?.name || ''}
            style={{ width: '100%' }}
          />
        </div>

        <Link to={`${ROUTERS.PRODUCT_LIST}/${itemObj?.id}`}>
          <h3>{itemObj?.name}</h3>
        </Link>

        <div className="wrapper-slide-action">
          <p className="product-price">{formatCurrency(String(Math.round(Number(itemObj?.price))))}</p>
          <button className="btn-buy"  onClick={() =>
            history.push(`${ROUTERS.PRODUCT_LIST}/${itemObj?.id}`)
          }>
            Mua Ngay
          </button>
        </div>
      </div>
    </>
  );
};

export default memo<Props>(SlideMainSale);
