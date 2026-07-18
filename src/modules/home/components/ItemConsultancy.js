// @flow

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../../themes/images';
import ROUTERS from 'constants/router';

type Props = {
  itemObj: Object,
  history: {
    push: Function,
  },
  slug: string,
};

const ItemConsultancy = ({ history, itemObj, slug }: Props) => {
  return (
    <div className="slide-content">
      <img
        className="bg-image"
        src={itemObj?.image}
        alt={itemObj?.name || ''}
        loading="lazy"
        decoding="async"
        width="400"
        height="300"
        style={{ objectFit: 'cover' }}
        onClick={() =>
          history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
        }
        onKeyDown={() =>
          history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
        }
        role="button"
        tabIndex={0}
      />
      <Link to={`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`}>
        <h3>{itemObj?.name}</h3>
      </Link>
      <p className="desc">{itemObj?.desc}</p>
      <Link
        to={`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`}
        className="row-right"
      >
        <img src={IMAGES.arrowRight} alt="Xem chi tiết" />
      </Link>
    </div>
  );
};

export default memo < Props > (ItemConsultancy);
