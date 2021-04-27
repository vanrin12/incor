// @flow

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Rating from '../../../commons/components/Rating';
import ROUTERS from '../../../constants/router';

type Props = {
  itemObj: Object,
  history: {
    push: Function,
  },
};

const ItemSearch = ({ history, itemObj }: Props) => {
  return (
    <div className="item col-6 col-md-6 col-lg-4">
      <div className="item-search">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${itemObj?.image})`,
          }}
          onClick={() =>
            history.push(`${ROUTERS.PARTNER}/${itemObj.partnerId}`)
          }
          onKeyDown={() =>
            history.push(`${ROUTERS.PARTNER}/${itemObj.partnerId}`)
          }
          role="button"
          tabIndex={0}
        />
        <div className="gr-footer">
          <Link
            to={`${ROUTERS.PARTNER}/${itemObj.partnerId}`}
            title={itemObj?.name}
          >
            <h3>{itemObj?.name}</h3>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <div className="hashtag">
              <div
                style={{
                  backgroundImage: `url(${itemObj?.companyImage})`,
                }}
              />
              {itemObj?.companyName}
            </div>
            <div className="rating">
              <Rating numberStar={itemObj?.rating} />
            </div>
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {itemObj?.areaName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(ItemSearch);
