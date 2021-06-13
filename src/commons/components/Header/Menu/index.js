// @flow
// libs
import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
// import LIST_MENU from '../../../../constants/listMenu';
import ItemMenu from './Item';

type Props = {
  location: Object,
  handelClickMenu?: Function,
};

const Menu = ({
  location,
  handelClickMenu = () => {},
  layoutHeader,
}: Props) => {
  const renderListItem = () => {
    let result = [];
    if (layoutHeader && layoutHeader.length > 0) {
      result =
        layoutHeader &&
        layoutHeader.map((item) => {
          return (
            <ItemMenu
              key={item.id}
              to={item.link}
              label={item.name}
              location={location}
              name={item.link}
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
