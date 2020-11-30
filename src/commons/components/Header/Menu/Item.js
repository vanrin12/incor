// @flow
// libs
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label: string,
  to: string,
  location: Object,
};

const ItemMenu = ({ label, to, location }: Props) => {
  const activeClass = location.pathname === to ? 'active' : '';

  return (
    <li className={activeClass}>
      <Link to={to} title={label}>
        {!!label && <>{label}</>}
      </Link>
    </li>
  );
};

export default memo<Props>(ItemMenu);
