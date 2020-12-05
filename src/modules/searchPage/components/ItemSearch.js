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
    <div className="item col-12 col-md-6 col-lg-4">
      <div className="item-search">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${itemObj?.image})`,
          }}
          onClick={() => history.push(`${ROUTERS.PARTNER}/${itemObj.id}`)}
          onKeyDown={() => history.push(`${ROUTERS.PARTNER}/${itemObj.id}`)}
          role="button"
          tabIndex={0}
        />
        <div className="gr-footer">
          <Link to={`${ROUTERS.PARTNER}/${itemObj.id}`} title={itemObj?.title}>
            <h3>{itemObj?.title}</h3>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <div className="hashtag">{itemObj?.hashtag}</div>
            <div className="rating">
              <Rating numberStar={itemObj?.rating} />
            </div>
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {itemObj?.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(ItemSearch);
