// @flow
// libs
import React from 'react';
import { Spinner } from 'react-bootstrap';

export const LoadingSmall = () => (
  <div className="spinner-wrap">
    <Spinner animation="border" variant="warning" size="sm" />
  </div>
);

export default LoadingSmall;
