// @flow

import React, { memo } from 'react';
import Button from '../../../commons/components/Button';
import { Link } from 'react-router-dom';
// import ROUTERS from 'constants/router';

type Props = {
  itemObj: Object,
  history: {
    push: Function,
  },
};

const SlideMainSale = ({ history, itemObj }: Props) => {
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
          <h3>{itemObj?.name}</h3>
        </Link>

        <Button onClick={() => history.push('#')}>XEM</Button>
      </div>
    </>
  );
};

export default memo<Props>(SlideMainSale);
