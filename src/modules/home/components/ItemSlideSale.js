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
  return (
    <>
      <div className="slide-content">
        <div
          className="bg-image"
          onClick={() =>
            history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
          }
          onKeyDown={() =>
            history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
          }
          role="button"
          tabIndex={0}
          style={{ height: 'auto' }}
        >
          <img
            src={itemObj?.image}
            alt={itemObj?.name || ''}
            style={{ width: '100%' }}
          />
        </div>

        <Link to={`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`}>
          <h3>{itemObj?.name}</h3>
        </Link>

        <div className="wrapper-slide-action">
          <p className="product-price">4.999.999</p>
          <button className="btn-buy"  onClick={() =>
            history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
          }>
            Mua Ngay
          </button>
        </div>
      </div>
    </>
  );
};

export default memo<Props>(SlideMainSale);
