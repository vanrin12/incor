// @flow
// libs
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label: string,
  to: string,
  name: string,
  location: Object,
};

const ItemMenu = ({ label, to, location, name }: Props) => {
  let activeClass = '';
  if (location.pathname === to || location.pathname.includes(name)) {
    activeClass = 'active';
  }

  return (
    <li className={activeClass}>
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

export default memo<Props>(ItemMenu);
