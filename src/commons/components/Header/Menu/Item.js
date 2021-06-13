// @flow
// libs
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label: string,
  to: string,
  name: string,
  location: Object,
  handelClickMenu?: Function,
};

const ItemMenu = ({
  label,
  to,
  location,
  name,
  handelClickMenu = () => {},
}: Props) => {
  let activeClass = '';
  if (location.pathname === to || location.pathname.includes(name)) {
    activeClass = 'active';
  }

  return (
    <li
      className={activeClass}
      onClick={() => handelClickMenu()}
      tabIndex={0}
      role="menuitem"
      onKeyPress={() => {}}
    >
      <Link
        title={label}
        to={{
          pathname: to,
          state: { label },
        }}
      >
        {!!label && <>{label}</>}
      </Link>
    </li>
  );
};

ItemMenu.defaultProps = {
  handelClickMenu: () => {},
};

export default memo<Props>(ItemMenu);
