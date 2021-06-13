// @flow
// libs
import React, { memo } from 'react';
import { Spinner } from 'react-bootstrap';

type Props = {
  size?: string,
};

export const LoadingSmall = ({ size = 'sm' }: Props) => (
  <div className="spinner-wrap">
    <Spinner animation="border" variant="warning" size={size} />
  </div>
);

LoadingSmall.defaultProps = {
  size: 'sm',
};

export default memo<Props>(LoadingSmall);
