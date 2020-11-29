// @flow
// libs
import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import LIST_MENU from '../../../../constants/listMenu';
import ItemMenu from './Item';

type Props = {
  location: Object,
};

const Menu = ({ location }: Props) => {
  const renderListItem = () => {
    let result = [];
    if (LIST_MENU.length > 0) {
      result = LIST_MENU.map((item) => {
        return (
          <ItemMenu
            key={item.id}
            to={item.to}
            label={item.label}
            location={location}
          />
        );
      });
    }
    return result;
  };
  return <ul className="menu-nav">{renderListItem()}</ul>;
};

export default withRouter(memo<Props>(Menu));
