/* eslint-disable no-nested-ternary */
// @flow
import React, { memo } from 'react';
import parse from 'html-react-parser';
import ROUTERS from 'constants/router';
import IMAGES from '../../../themes/images';

type Props = {
  history: {
    push: Function,
    location: Object,
  },
  itemObj: Object,
  slug: string,
};

const ItemClientManager = ({ history, itemObj, slug }: Props) => {
  return (
    <div className="item-client">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${itemObj?.image})`,
        }}
        onClick={() =>
          history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
        }
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      />
      <div className="item-content">
        <h3
          className="title"
          onClick={() =>
            history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
          }
          onKeyDown={() => {}}
          role="presentation"
        >
          {itemObj?.title}
        </h3>
        <div className="date"> {itemObj?.date}</div>
        <p className="desc">{itemObj?.desc && parse(itemObj?.desc)}</p>
        <div
          className="row-right"
          onClick={() =>
            history.push(`${ROUTERS.PAGE_BLOG}/${slug}/${itemObj?.id}`)
          }
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <img src={IMAGES.arrowRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(ItemClientManager);
