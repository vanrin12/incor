// @flow

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../../../themes/images';
// import ROUTERS from 'constants/router';

type Props = {
  itemObj: Object,
  history: {
    push: Function,
  },
};

const ItemConsultancy = ({ history, itemObj }: Props) => {
  return (
    <>
      <div className="slide-content">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${itemObj?.image})`,
          }}
          onClick={() => history.push('#')}
          onKeyDown={() => history.push('#')}
          role="button"
          tabIndex={0}
        />
        <Link to="#">
          <h3
            onClick={() => history.push('#')}
            onKeyDown={() => history.push('#')}
            role="button"
            tabIndex={0}
          >
            {itemObj?.name}
          </h3>
        </Link>
        <p className="desc">{itemObj?.desc}</p>
        <Link to="#" className="row-right">
          <img src={IMAGES.arrowRight} alt="" />
        </Link>
      </div>
    </>
  );
};

export default memo<Props>(ItemConsultancy);
