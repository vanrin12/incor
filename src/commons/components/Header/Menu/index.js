// @flow
// libs
import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import LIST_MENU from '../../../../constants/listMenu';
import ItemMenu from './Item';

type Props = {
  location: Object,
  handelClickMenu?: Function,
};

const Menu = ({ location, handelClickMenu = () => {} }: Props) => {
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
            name={item.name}
            handelClickMenu={handelClickMenu}
          />
        );
      });
    }
    return result;
  };
  return <ul className="menu-nav">{renderListItem()}</ul>;
};

Menu.defaultProps = {
  handelClickMenu: () => {},
};
export default withRouter(memo<Props>(Menu));
